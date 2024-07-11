import Image from 'next/image'
import React from 'react'

function CustomersWorldwide() {
    return (
        <div className='customers-div'>
            <div className="flex flex-col">
                <div className='text-builder'>
                    <h2 className="builder-color">Building delightful experiences for our{" "}</h2>
                    
                    <h2 className="customers-worldwide text-black">customers worldwide</h2>
                </div>
                <div className="customer-img-div flex gap-5 justify-between mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <Image
                        loading="lazy"
                        src="/wipag.png"
                        width={100}
                        height={100}
                        alt=''
                        className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                    />
                    <Image
                        loading="lazy"
                        src="/alphagary.png"
                        width={100}
                        height={100}
                        alt=''
                        className="shrink-0 max-w-full aspect-[1.43] w-[133px]"
                    />
                    <Image
                        loading="lazy"
                        src="/solvay.png"
                        width={100}
                        height={100}
                        alt=''
                        className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                    />
                    <Image
                        loading="lazy"
                        src="/envalior.png"
                        width={100}
                        height={100}
                        alt=''
                        className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                    />
                    <Image
                        loading="lazy"
                        src="/tecnar.png"
                        width={100}
                        height={100}
                        alt=''
                        className="shrink-0 max-w-full aspect-[1.43] w-[133px]"
                    />
                </div>
                {/* <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full"> */}
                <div className="customer-img-div flex gap-5 justify-between mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <Image
                        loading="lazy"
                        src="/ampacet.png"
                        width={100}
                        height={100}
                        alt=''
                        className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                    />
                    <Image
                        loading="lazy"
                        src="/mgg.png"
                        width={100}
                        height={100}
                        alt=''
                        className="shrink-0 self-start max-w-full aspect-[1.47] w-[133px]"
                    />
                    <Image
                        loading="lazy"
                        src="/sipol.png"
                        width={100}
                        height={100}
                        alt=''
                        className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                    />
                    <Image
                        loading="lazy"
                        src="/vamp.png"
                        width={100}
                        height={100}
                        alt=''
                        className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                    />
                    <Image
                        loading="lazy"
                        src="/ineos.png"
                        width={100}
                        height={100}
                        alt=''
                        className="shrink-0 max-w-full aspect-[1.45] w-[133px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default CustomersWorldwide