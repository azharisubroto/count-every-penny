import VideoCard from '@/components/Articles/VideoCard'
import ArticleAuthor from '@/components/Articles/ArticleAuthor'
import AustraliaState from '@/components/Articles/Cta/AustraliaState'
import PremiumIncrease from '@/components/Articles/PremiumIncrease'
import LifeStageStack from '@/components/Articles/LifeStageStack'
import WomTestimonial from '@/components/Articles/WomTestimonial'
import ProductReview from '@/components/Articles/ProductReview'
import FundsTiles from '@/components/Articles/Cta/FundsTiles'
import FundSelect from '@/components/Articles/Cta/FundSelect'
import FreebiesCTA from '@/components/Articles/Cta/FreebiesCTA'

export const shortcodesBrackets = {
  VideoCard: {
    type: 'react',
    component: VideoCard
  },
  ArticleAuthor: {
    type: 'react',
    component: ArticleAuthor
  },
  AustraliaState: {
    type: 'react',
    component: AustraliaState
  },
  PremiumIncrease: {
    type: 'react',
    component: PremiumIncrease
  },
  LifeStageStack: {
    type: 'react',
    component: LifeStageStack
  },
  WomTestimonial: {
    type: 'react',
    component: WomTestimonial
  },
  ProductReview: {
    type: 'react',
    component: ProductReview
  },
  FundsTiles: {
    type: 'react',
    component: FundsTiles
  },
  FundSelect: {
    type: 'react',
    component: FundSelect
  },
  FreebiesCTA: {
    type: 'react',
    component: FreebiesCTA
  }
}

export const shortcodes = {
  ...shortcodesBrackets
}
