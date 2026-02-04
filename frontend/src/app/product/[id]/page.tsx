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
                <div className='max-w-4xl mx-auto'>
                    <Link href='/' className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4'>
                        <ArrowLeft size={20} />
                        Back to Products
                    </Link>
                    <div className='bg-white rounded-lg shadow p-8 text-center'>
                        <p className='text-gray-500 text-lg'>Product not found</p>
                        <Link href='/' className='mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
                            Browse Products
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className='min-h-screen bg-gray-50'>
            <div className='px-8 py-6 max-w-6xl mx-auto'>
                <Link href='/' className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6'>
                    <ArrowLeft size={20} />
                    Back to Products
                </Link>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow p-6'>
                    {/* image selection */}
                    <div className="w-full">
                        <div className='bg-gray-100 rounded-lg p-4'>
                            <img 
                            src={product.image} 
                            alt={product.title}
                            className='w-full rounded-lg object-cover max-h-96' />
                        </div>
                    </div>

                    {/* details */}
                    <div className='flex flex-col'>
                        <h1 className='text-3xl font-bold text-gray-800 mb-2'>{product.title}</h1>
                        
                        {product.rating && (
                            <div className="flex items-center gap-1 text-sm mb-4">
                                <Star size={18} className="text-yellow-400 fill-current" />
                                <span className="font-medium text-gray-700">{product.rating}</span>
                                <span className="text-gray-500 ml-1">({Math.floor(Math.random() * 100) + 50} reviews)</span>
                            </div>
                        )}
                        
                        <p className='text-blue-700 text-3xl font-bold mb-4'>
                            ${product.price}
                        </p>
                        
                        <div className='mb-4'>
                            <span className='inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium capitalize'>
                                {product.category}
                            </span>
                        </div>
                        
                        <p className='text-gray-700 text-base leading-relaxed mb-6'>{product.description}</p>

                        <AddToCartButton product={product} />
                    </div>
                </div>
            </div>
        </div>
    )
}