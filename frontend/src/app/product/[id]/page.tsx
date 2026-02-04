import Link from 'next/link'
import { products } from '@/data/products'
import { Star, ArrowLeft } from 'lucide-react'
import { AddToCartButton } from '@/components/AddToCartButton'

type Props = {
    params: Promise<{
        id: string
    }>
}

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params
    const product = products.find((p) => p.slug === id)

    if(!product){
        return(
            <div className='min-h-screen bg-gray-50 px-8 py-6'>
                <div className='max-w-6xl mx-auto'>
                    <Link href='/' className='inline-flex items-center gap-2 text-[#0658A8] hover:text-[#054580] mb-6'>
                        <ArrowLeft size={20} />
                        Back to Products
                    </Link>
                    <div className='bg-white rounded-lg shadow-lg p-12 text-center'>
                        <p className='text-gray-500 text-lg mb-6'>Product not found</p>
                        <Link href='/' className='inline-block bg-[#0658A8] text-white px-8 py-3 rounded-lg hover:bg-[#054580] transition-colors font-semibold'>
                            Browse Products
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className='min-h-screen bg-gray-50'>
            <div className='px-8 py-8 max-w-6xl mx-auto'>
                <Link href='/' className='inline-flex items-center gap-2 text-[#0658A8] hover:text-[#054580] mb-8'>
                    <ArrowLeft size={20} />
                    Back to Products
                </Link>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg p-8'>
                    {/* image selection */}
                    <div className="w-full flex items-center justify-center">
                        <div className='bg-gray-50 rounded-lg p-8 w-full'>
                            <img 
                            src={product.image} 
                            alt={product.title}
                            className='w-full rounded-lg object-contain max-h-96 mx-auto' />
                        </div>
                    </div>

                    {/* details */}
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-4xl font-bold text-gray-800 mb-4'>{product.title}</h1>
                        
                        {product.rating && (
                            <div className="flex items-center gap-2 text-sm mb-6">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className={i < Math.floor(product.rating!) ? "text-yellow-400 fill-current" : "text-gray-300"}
                                        />
                                    ))}
                                </div>
                                <span className="font-medium text-gray-700">{product.rating}</span>
                                <span className="text-gray-500">({Math.floor(Math.random() * 100) + 50} reviews)</span>
                            </div>
                        )}
                        
                        <p className='text-[#0658A8] text-4xl font-bold mb-6'>
                            ${product.price}
                        </p>
                        
                        <div className='mb-6'>
                            <span className='inline-block bg-blue-100 text-[#0658A8] px-4 py-2 rounded-full text-sm font-semibold capitalize'>
                                {product.category}
                            </span>
                        </div>
                        
                        <p className='text-gray-700 text-base leading-relaxed mb-8'>{product.description}</p>

                        <AddToCartButton product={product} />
                    </div>
                </div>
            </div>
        </div>
    )
}