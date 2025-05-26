import { useGetProductsQuery, useGetCategoriesQuery } from "../store/services/productsApi"
import CategoryCard from "../components/CategoryCard"
import ProductCard from "../components/ProductCard"
import FeatureCard from "../components/FeatureCard"
import BlogCard from "../components/BlogCard"
import TestimonialCard from "../components/TestimonialCard"
import styles from "./HomePage.module.css"

// mock data as fallback
const mockProducts = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "/placeholder.svg?height=240&width=240",
    images: ["/placeholder.svg?height=300&width=300"],
  },
  {
    id: 2,
    title: "iPhone X",
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "/placeholder.svg?height=240&width=240",
    images: ["/placeholder.svg?height=300&width=300"],
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "/placeholder.svg?height=240&width=240",
    images: ["/placeholder.svg?height=300&width=300"],
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "/placeholder.svg?height=240&width=240",
    images: ["/placeholder.svg?height=300&width=300"],
  },
  {
    id: 5,
    title: "Huawei P30",
    description: "Huawei's re-badged P30 Pro New Edition was officially unveiled yesterday in Germany",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "/placeholder.svg?height=240&width=240",
    images: ["/placeholder.svg?height=300&width=300"],
  },
]

const HomePage = () => {
  const { data: productsData, error: productsError, isLoading: productsLoading } = useGetProductsQuery()
  const { data: categories, error: categoriesError, isLoading: categoriesLoading } = useGetCategoriesQuery()

  // wait until data is loaded
  if (productsLoading || categoriesLoading) {
    return <div className={styles.loading}>Loading...</div>
  }

  // use mock data if API fails
  let products = mockProducts
  let hasApiError = false

  if (productsError || categoriesError) {
    console.error("API Error - Using fallback data:", { productsError, categoriesError })
    hasApiError = true
  } else if (productsData && productsData.products && productsData.products.length > 0) {
    products = productsData.products
  }

  // create hardcoded category cards but use available images
  const categoryCards = [
    {
      id: 1,
      name: "FURNITURE",
      itemCount: 5,
      image: products[0]?.thumbnail || "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      name: "FURNITURE",
      itemCount: 5,
      image: products[1]?.thumbnail || "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      name: "FURNITURE",
      itemCount: 5,
      image: products[2]?.thumbnail || "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      name: "FURNITURE",
      itemCount: 5,
      image: products[3]?.thumbnail || "/placeholder.svg?height=200&width=400",
    },
  ]

  // get bestseller products (top rated)
  const bestsellerProducts = [...products].sort((a, b) => b.rating - a.rating).slice(0, 10)

  // get featured products (newest ones)
  const featuredProducts = [...products].sort((a, b) => b.id - a.id).slice(0, 5)

  return (
    <div className={styles.homePage}>
      {/* show warning if using fallback data */}
      {hasApiError && (
        <div className={styles.apiWarning}>
          <p>⚠️ Using demo data - API temporarily unavailable</p>
        </div>
      )}

      {/* category section */}
      <section className={styles.categorySection}>
        {categoryCards.map((category) => (
          <CategoryCard key={category.id} name={category.name} image={category.image} itemCount={category.itemCount} />
        ))}
      </section>

      {/* bestseller products section */}
      <section className={styles.productsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>BESTSELLER PRODUCTS</h2>
          <p className={styles.sectionSubtitle}>Problems trying to resolve the conflict between</p>
        </div>
        <div className={styles.productsGrid}>
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <button className={styles.loadMoreButton}>LOAD MORE PRODUCTS</button>
      </section>

      {/* featured services section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionOverline}>Featured Products</p>
          <h2 className={styles.sectionTitle}>THE BEST SERVICES</h2>
          <p className={styles.sectionSubtitle}>Problems trying to resolve the conflict between</p>
        </div>

        <div className={styles.featuresGrid}>
          <FeatureCard icon="book-open" title="Easy Wins" description="Get your best looking smile now!" />
          <FeatureCard
            icon="layout"
            title="Concrete"
            description="Defalcate is most focused in helping you discover your most beautiful smile"
          />
          <FeatureCard icon="trending-up" title="Hack Growth" description="Overcame any hurdle or any other problem." />
        </div>
      </section>

      {/* featured blog Posts */}
      <section className={styles.blogSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionOverline}>Practice Advice</p>
          <h2 className={styles.sectionTitle}>Featured Products</h2>
        </div>

        <div className={styles.blogGrid}>
          {featuredProducts.slice(0, 3).map((product, index) => (
            <BlogCard
              key={index}
              image={product.thumbnail}
              title={`Loudest à la Madison #${index + 1} (L'integral)`}
              description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
              date="22 April 2021"
              comments={10}
              isNew={true}
            />
          ))}
        </div>
      </section>

      {/* testimonials section */}
      <section className={styles.testimonialsSection}>
        <div>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What they say about us</h2>
          </div>

          <div className={styles.testimonialContainer}>
            <TestimonialCard
              avatar={products[0]?.thumbnail || "/placeholder.svg?height=90&width=90"}
              rating={4}
              text="Slate helps you see how many more days you need to work to reach your financial goal."
              name="Regina Miles"
              position="Designer"
            />
          </div>
        </div>

        <div className={styles.galleryGrid}>
          {products.slice(0, 9).map((product, index) => (
            <div key={index} className={styles.galleryItem}>
              <img src={product.thumbnail || "/placeholder.svg"} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <p className={styles.ctaOverline}>Designing Better Experience</p>
          <h2 className={styles.ctaTitle}>Problems trying to resolve the conflict between</h2>
          <p className={styles.ctaPrice}>$16.48</p>
          <p className={styles.ctaDescription}>
            Problems trying to resolve the conflict between the two major realms of Classical physics:
          </p>
          <button className={styles.ctaButton}>ADD YOUR CALL TO ACTION</button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
