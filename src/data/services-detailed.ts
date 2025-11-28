import { FaAmazon } from "react-icons/fa";
import { SiEbay, SiShopify, SiWalmart } from "react-icons/si";
import { PiPenNibLight } from "react-icons/pi";
import { IconType } from "react-icons";

export interface SubService {
    title: string;
    slug: string;
    description: string;
    content?: string;
    process?: { title: string; description: string }[];
    benefits?: string[];
}

export interface ServiceDetail {
    title: string;
    slug: string;
    color: string;
    bg: string;
    icon: IconType;
    details: SubService[];
}

const generateSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export const services: ServiceDetail[] = [
    {
        title: "Amazon Services",
        slug: "amazon-services",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        icon: FaAmazon,
        details: [
            { title: "Keyword Research", description: "In-depth analysis to identify high-converting keywords for your products." },
            { title: "Listing Optimization", description: "Enhancing titles, bullets, and descriptions to improve visibility and sales." },
            { title: "Customer Support", description: "Professional handling of customer inquiries, returns, and feedback." },
            { title: "A to Z Guarantee Claims", description: "Expert management and resolution of A-to-Z guarantee claims." },
            { title: "Amazon Cases", description: "Handling case logs and communicating with Amazon support effectively." },
            { title: "Account Health", description: "Monitoring and maintaining your account health metrics to prevent suspension." },
            { title: "Listing Issues", description: "Troubleshooting and fixing suppressed or stranded inventory issues." },
            { title: "A+ (EBC) Creation", description: "Designing engaging Enhanced Brand Content to boost conversion rates." },
            { title: "Storefront Creation", description: "Building a professional brand store to showcase your product catalog." },
            { title: "Campaign Management", description: "Strategic management of PPC campaigns to maximize ROI." },
            { title: "Coupon/Promotion Management", description: "Setting up and managing deals, coupons, and promotions." },
            { title: "Infringements", description: "Handling IP complaints and protecting your brand from hijackers." },
            { title: "Hijacker Removal", description: "Removing unauthorized sellers from your listings to protect your buy box." },
            { title: "Business Report", description: "Detailed analysis of your business performance and sales trends." },
            { title: "Account Management", description: "Full-service management of your Amazon seller central account." },
            { title: "MAP Enforcement", description: "Enforcing Minimum Advertised Price policies across sellers." },
            { title: "MAP Enforcement", description: "Enforcing Minimum Advertised Price policies across sellers." },
        ].map(item => ({
            ...item,
            slug: generateSlug(item.title),
            process: [
                { title: "Analysis", description: "We start by analyzing your current status and identifying opportunities." },
                { title: "Strategy", description: "Developing a tailored plan to achieve your specific goals." },
                { title: "Execution", description: "Implementing the strategy with precision and expertise." },
                { title: "Optimization", description: "Continuous monitoring and refining for maximum results." },
            ],
            benefits: [
                "Increased Efficiency",
                "Higher ROI",
                "Expert Support",
                "Scalable Solutions",
                "Data-Driven Insights",
                "Time Savings"
            ]
        })),
    },
    {
        title: "Ebay Services",
        slug: "ebay-services",
        color: "text-blue-300",
        bg: "bg-blue-500/10",
        icon: SiEbay,
        details: [
            { title: "Store Setup & Optimization", description: "Setting up your eBay store for maximum visibility and sales." },
            { title: "Product Listing & Management", description: "Creating and managing professional listings for your inventory." },
            { title: "Customer Service", description: "Prompt and professional responses to buyer messages and inquiries." },
            { title: "Order Fulfillment", description: "Efficient processing and tracking of orders to ensure timely delivery." },
            { title: "Marketing & Promotions", description: "Running eBay promotions and markdown manager campaigns." },
            { title: "Account Health Management", description: "Keeping your seller standards high to avoid restrictions." },
            { title: "eBay SEO Optimization", description: "Optimizing listings with right keywords to rank higher in search." },
            { title: "Promotions & Advertising", description: "Managing promoted listings to increase product visibility." },
            { title: "eBay Cases", description: "Resolving disputes, returns, and cancellations effectively." },
            { title: "eBay Cases", description: "Resolving disputes, returns, and cancellations effectively." },
        ].map(item => ({
            ...item,
            slug: generateSlug(item.title),
            process: [
                { title: "Audit", description: "Reviewing your eBay store and listings for improvement areas." },
                { title: "Optimization", description: "Enhancing listings and store settings for better visibility." },
                { title: "Management", description: "Daily operations handling to ensure smooth performance." },
                { title: "Growth", description: "Scaling your sales through strategic promotions." },
            ],
            benefits: [
                "Top Rated Seller Status",
                "Improved Search Ranking",
                "Customer Satisfaction",
                "Risk Mitigation",
                "Sales Growth",
                "Professional Storefront"
            ]
        })),
    },
    {
        title: "Shopify Services",
        slug: "shopify-services",
        color: "text-green-300",
        bg: "bg-green-500/10",
        icon: SiShopify,
        details: [
            { title: "Store Setup & Customization", description: "Building a custom Shopify store tailored to your brand." },
            { title: "Product Upload & Management", description: "Bulk uploading products and managing inventory levels." },
            { title: "Payment Gateway Integration", description: "Setting up secure payment gateways for smooth transactions." },
            { title: "App Integration", description: "Integrating essential apps for reviews, email marketing, and more." },
            { title: "Theme Customization", description: "Customizing themes to match your brand identity and requirements." },
            { title: "SEO Optimization", description: "Optimizing your store structure and content for search engines." },
            { title: "Marketing & Promotions", description: "Setting up discount codes and marketing campaigns." },
            { title: "Customer Support", description: "Handling customer queries via live chat or email." },
            { title: "Order Management", description: "Streamlining the order processing and fulfillment workflow." },
            { title: "Order Management", description: "Streamlining the order processing and fulfillment workflow." },
        ].map(item => ({
            ...item,
            slug: generateSlug(item.title),
            process: [
                { title: "Setup", description: "Configuring your Shopify store with best practices." },
                { title: "Customization", description: "Tailoring the design and functionality to your brand." },
                { title: "Launch", description: "Going live with a fully tested and optimized store." },
                { title: "Growth", description: "Driving traffic and sales through marketing and SEO." },
            ],
            benefits: [
                "Custom Brand Identity",
                "Seamless User Experience",
                "Mobile Optimization",
                "Secure Transactions",
                "Integrated Marketing",
                "Scalable Infrastructure"
            ]
        })),
    },
    {
        title: "Walmart Services",
        slug: "walmart-services",
        color: "text-indigo-300",
        bg: "bg-indigo-500/10",
        icon: SiWalmart,
        details: [
            { title: "Account Setup & Management", description: "Getting your Walmart Marketplace account approved and set up." },
            { title: "Product Listing & Optimization", description: "Creating high-quality listings that meet Walmart's standards." },
            { title: "Inventory Management", description: "Syncing inventory and preventing stockouts." },
            { title: "Order Fulfillment", description: "Managing orders and ensuring compliance with shipping metrics." },
            { title: "Customer Service", description: "Providing top-notch support to Walmart customers." },
            { title: "Walmart SEO Optimization", description: "Optimizing titles and attributes for Walmart's search algorithm." },
            { title: "Account Health Monitoring", description: "Tracking performance metrics to maintain good standing." },
            { title: "Walmart Cases", description: "Handling support tickets and disputes with Walmart." },
            { title: "Walmart Cases", description: "Handling support tickets and disputes with Walmart." },
        ].map(item => ({
            ...item,
            slug: generateSlug(item.title),
            process: [
                { title: "Application", description: "Assisting with the Walmart Marketplace application process." },
                { title: "Onboarding", description: "Setting up your account and listing your catalog." },
                { title: "Optimization", description: "Improving listing quality for Walmart's algorithm." },
                { title: "Management", description: "Ongoing support for orders, inventory, and customers." },
            ],
            benefits: [
                "New Revenue Stream",
                "Less Competition",
                "Brand Authority",
                "Access to Millions",
                "Diversified Sales",
                "Expert Guidance"
            ]
        })),
    },
    {
        title: "Design & Development",
        slug: "design-development",
        color: "text-pink-300",
        bg: "bg-pink-500/10",
        icon: PiPenNibLight,
        details: [
            { title: "Logo Design", description: "Creating unique and memorable logos for your brand." },
            { title: "Brand Identity", description: "Developing a cohesive visual identity across all platforms." },
            { title: "Packaging Design", description: "Designing attractive packaging that stands out on shelves." },
            { title: "Print Design", description: "Creating business cards, flyers, and brochures." },
            { title: "Social Media Graphics", description: "Designing engaging posts and banners for social media." },
            { title: "Marketing Materials", description: "Producing high-quality marketing assets for campaigns." },
            { title: "Infographics", description: "Visualizing data and information in an easy-to-understand format." },
            { title: "Website Design", description: "Designing user-friendly and visually appealing websites." },
            { title: "App Development", description: "Building custom mobile applications for iOS and Android." },
            { title: "UI/UX Design", description: "Designing intuitive user interfaces and experiences." },
            { title: "UI/UX Design", description: "Designing intuitive user interfaces and experiences." },
        ].map(item => ({
            ...item,
            slug: generateSlug(item.title),
            process: [
                { title: "Discovery", description: "Understanding your brand, audience, and objectives." },
                { title: "Concept", description: "Creating initial design concepts and mood boards." },
                { title: "Design", description: "Refining the chosen concept into high-fidelity designs." },
                { title: "Delivery", description: "Providing all necessary files and assets for implementation." },
            ],
            benefits: [
                "Professional Image",
                "Brand Consistency",
                "Audience Engagement",
                "Higher Conversions",
                "Unique Identity",
                "Visual Impact"
            ]
        })),
    },
];
