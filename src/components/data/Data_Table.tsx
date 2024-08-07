"use client"
import * as React from "react"
import { useState, useEffect } from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
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
import { motion, AnimatePresence } from "framer-motion"

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

const LoadingBar = ({ progress }) => (
  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-blue-500"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5 }}
    />
  </div>
)

const LoadingSpinner = () => (
  <motion.div
    className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  />
)

const LoadingPulse = () => (
  <div className="flex space-x-2">
    {[0, 1, 2].map((index) => (
      <motion.div
        key={index}
        className="w-3 h-3 bg-blue-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: index * 0.2,
        }}
      />
    ))}
  </div>
)

const Loader = ({ progress }) => (
  <div className="flex flex-col items-center justify-center w-full h-64 space-y-4">
    <LoadingSpinner />
    <LoadingBar progress={progress} />
    <LoadingPulse />
    <p className="text-sm text-gray-500">Loading data... {progress}%</p>
  </div>
)

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
  const [pageSize, setPageSize] = useState(10)
  const [pageIndex, setPageIndex] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const [loadingProgress, setLoadingProgress] = useState(0)
  
  

  const columns: ColumnDef<DataAvailability>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="w-3 h-3"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="w-3 h-3"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "continent",
      header: "Continent",
      cell: ({ row }) => <div className="text-xs">{row.getValue("continent")}</div>,
    },
    {
      accessorKey: "country",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 text-xs font-medium"
        >
          Country
          <ArrowUpDown className="ml-1 h-2 w-2" />
        </Button>
      ),
      cell: ({ row }) => <div className="text-xs">{row.getValue("country")}</div>,
    },
    {
      accessorKey: "data_type",
      header: "Data Type",
      cell: ({ row }) => <div className="text-xs">{row.getValue("data_type")}</div>,
    },
    {
      accessorKey: "direction",
      header: "Direction",
      cell: ({ row }) => <div className="text-xs">{row.getValue("direction")}</div>,
    },
    {
      accessorKey: "data_coverage",
      header: "Coverage",
      cell: ({ row }) => <div className="text-xs">{row.getValue("data_coverage")}</div>,
    },
    {
      accessorKey: "period",
      header: "Availability",
      cell: ({ row }) => <div className="text-xs">{row.getValue("period")}</div>,
    },
    {
      accessorKey: "data_fields",
      header: "Fields",
      cell: ({ row }) => <div className="text-xs">{row.getValue("data_fields")}</div>,
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
            className="p-1"
          >
            <Download className="h-3 w-3" />
          </Button>
        )
      },
    },
  ]

  useEffect(() => {
    fetchData()
  }, [filters, pageIndex, pageSize])

  const fetchData = async () => {
    setIsLoading(true)
    setLoadingProgress(0)
    try {
      // Simulating a loading progress
      const progressInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          const newProgress = prev + Math.random() * 20
          return newProgress > 90 ? 90 : newProgress
        })
      }, 500)

      const response = await fetch('/api/data-availability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data_type: filters.data_type === "all" ? undefined : filters.data_type.toLowerCase(),
          continent: filters.continent === "all" ? undefined : filters.continent.toLowerCase(),
          direction: filters.direction === "all" ? undefined : filters.direction.toLowerCase(),
          pageIndex,
          pageSize
        }),
      })
      clearInterval(progressInterval)
      setLoadingProgress(100)

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const result = await response.json()
      setData(result.data)
      setTotalItems(result.total)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setTimeout(() => setIsLoading(false), 500) // Delay to show 100% progress
    }
  }


  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
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
      pagination: {
        pageIndex,
        pageSize
      },
    },
    onGlobalFilterChange: setGlobalFilter,
    manualPagination: true, // Manual pagination
    pageCount: Math.ceil(totalItems / pageSize), // Update based on total items from server
  })

  return (
    <div className="space-y-4 p-2 sm:p-4 md:p-6 bg-white rounded-lg shadow-lg">
      <h2 style={{textAlign:"center"}} className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Data Availability</h2>
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 items-start sm:items-end">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <Select onValueChange={(value) => setFilters({ ...filters, data_type: value })}>
            <SelectTrigger className="w-full text-xs">
              <SelectValue placeholder="Data Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Data Types</SelectItem>
              <SelectItem value="mirror">Mirror</SelectItem>
              <SelectItem value="detailed">Detailed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <Select onValueChange={(value) => setFilters({ ...filters, continent: value })}>
            <SelectTrigger className="w-full text-xs">
              <SelectValue placeholder="Continent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Continents</SelectItem>
              <SelectItem value="africa">Africa</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="north america">North America</SelectItem>
              <SelectItem value="south america">South America</SelectItem>
              <SelectItem value="oceania">Oceania</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <Select onValueChange={(value) => setFilters({ ...filters, direction: value })}>
            <SelectTrigger className="w-full text-xs">
              <SelectValue placeholder="Direction" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Directions</SelectItem>
              <SelectItem value="export">Export</SelectItem>
              <SelectItem value="import">Import</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <Input
            placeholder="Search..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full text-xs"
          />
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border rounded-lg shadow-sm">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id} className="px-1 py-2 text-xs bg-gray-50">
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="p-0">
                      <Loader />
                    </TableCell>
                  </TableRow>
                ) : data.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center text-gray-500">
                      No results found.
                    </TableCell>
                  </TableRow>
                ) : (
                  table.getRowModel().rows.map((row) => (
                    <TableRow 
                      key={row.id} 
                      data-state={row.getIsSelected() && "selected"}
                      className="hover:bg-gray-50 transition-colors duration-150 ease-in-out"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="px-1 py-2 text-xs">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-2 text-xs mt-2">
        <div className="flex items-center space-x-2">
          <span>Rows per page:</span>
          <Select value={pageSize.toString()} onValueChange={(value) => setPageSize(Number(value))}>
            <SelectTrigger className="w-16">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[10, 20, 50, 100].map((size) => (
                <SelectItem key={size} value={size.toString()}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            disabled={pageIndex === 0}
            onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
            className="text-xs"
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {pageIndex + 1} of {Math.ceil(totalItems / pageSize)}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={(pageIndex + 1) * pageSize >= totalItems}
            onClick={() => setPageIndex((prev) => prev + 1)}
            className="text-xs"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}