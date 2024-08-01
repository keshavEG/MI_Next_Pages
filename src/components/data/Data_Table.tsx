"use client"
import * as React from "react"
import { useState, useEffect, useMemo } from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, Download, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export type DataAvailability = {
  continent: string
  country: string
  data_type: string
  direction: string
  data_coverage: string
  period: string
  data_fields: string
  file_url: string | null
}

export function DataAvailabilityTable() {
  const [data, setData] = useState<DataAvailability[]>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [globalFilter, setGlobalFilter] = useState("")
  const [filters, setFilters] = useState({
    continent: "all",
    data_type: "all",
    direction: "all"
  })
  const [isLoading, setIsLoading] = useState(false)

  const columns: ColumnDef<DataAvailability>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "continent",
      header: "Continent",
      cell: ({ row }) => <div>{row.getValue("continent")}</div>,
    },
    {
      accessorKey: "country",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Country
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div>{row.getValue("country")}</div>,
    },
    {
      accessorKey: "data_type",
      header: "Data Type",
      cell: ({ row }) => <div>{row.getValue("data_type")}</div>,
    },
    {
      accessorKey: "direction",
      header: "Direction",
      cell: ({ row }) => <div>{row.getValue("direction")}</div>,
    },
    {
      accessorKey: "data_coverage",
      header: "Data Coverage",
      cell: ({ row }) => <div>{row.getValue("data_coverage")}</div>,
    },
    {
      accessorKey: "period",
      header: "Data Availability",
      cell: ({ row }) => <div>{row.getValue("period")}</div>,
    },
    {
      accessorKey: "data_fields",
      header: "Data Fields",
      cell: ({ row }) => <div>{row.getValue("data_fields")}</div>,
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const data = row.original
        return (
          <Button
            variant="ghost"
            onClick={() => data.file_url && window.open(data.file_url, "_blank")}
            disabled={!data.file_url}
          >
            <Download className="h-4 w-4" />   
          </Button>
        )
      },
    },
  ]

  useEffect(() => {
    fetchData()
  }, [filters])


  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/data-availability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data_type: filters.data_type === "all" ? undefined : filters.data_type.toLowerCase(),
          continent: filters.continent === "all" ? undefined : filters.continent.toLowerCase(),
          direction: filters.direction === "all" ? undefined : filters.direction.toLowerCase(),
        }),
      })
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    globalFilterFn: (row, columnId, filterValue) => {
      const safeValue = (() => {
        const value = row.getValue(columnId)
        return typeof value === 'number' ? String(value) : (value ?? '')
      })()
      return safeValue.toLowerCase().includes(filterValue.toLowerCase())
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  })

  return (
    <div className=" space-y-6 p-6 md:p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Availability</h2>
      <div className="flex flex-wrap gap-4 items-end">
        <div className="w-full md:w-1/3 lg:w-1/4 relative">
          <label htmlFor="globalSearch" className="text-sm font-medium text-gray-700 mb-1 block">
            Global Search
          </label>
          <Input
            id="globalSearch"
            placeholder="Search..."
            value={globalFilter ?? ""}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="pl-10 pr-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          <Search className="absolute left-3 top-[60%] transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <label htmlFor="continentFilter" className="text-sm font-medium text-gray-700 mb-1 block">
            Continent
          </label>
          <Select
            value={filters.continent}
            onValueChange={(value) => setFilters(prev => ({ ...prev, continent: value }))}
          >
            <SelectTrigger id="continentFilter" className="w-full">
              <SelectValue placeholder="Select Continent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Continents</SelectItem>
              <SelectItem value="Asia">Asia</SelectItem>
              <SelectItem value="Europe">Europe</SelectItem>
              <SelectItem value="Africa">Africa</SelectItem>
              <SelectItem value="North America">North America</SelectItem>
              <SelectItem value="South America">South America</SelectItem>
              <SelectItem value="Australia">Australia</SelectItem>
              <SelectItem value="Antarctica">Antarctica</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <label htmlFor="dataTypeFilter" className="text-sm font-medium text-gray-700 mb-1 block">
            Data Type
          </label>
          <Select
            value={filters.data_type}
            onValueChange={(value) => setFilters(prev => ({ ...prev, data_type: value }))}
          >
            <SelectTrigger id="dataTypeFilter" className="w-full">
              <SelectValue placeholder="Select Data Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Detailed">Detailed</SelectItem>
              <SelectItem value="Summary">Summary</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <label htmlFor="directionFilter" className="text-sm font-medium text-gray-700 mb-1 block">
            Direction
          </label>
          <Select
            value={filters.direction}
            onValueChange={(value) => setFilters(prev => ({ ...prev, direction: value }))}
          >
            <SelectTrigger id="directionFilter" className="w-full">
              <SelectValue placeholder="Select Direction" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Directions</SelectItem>
              <SelectItem value="Export">Export</SelectItem>
              <SelectItem value="Import">Import</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border overflow-hidden">
        {isLoading ? (
          <div className="flex justify-center items-center h-64 bg-gray-50">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-400 mb-4"></div>
              <div className="h-4 bg-blue-400 rounded w-3/4"></div>
              <div className="h-4 bg-blue-400 rounded w-1/2 mt-2"></div>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id} className="bg-gray-100">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="hover:bg-gray-50"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 py-4">
        <div className="text-sm text-gray-700">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-700">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>    
    </div>
  )
}