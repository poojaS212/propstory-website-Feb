import SeoFAQ from '@/Components/Seo/SeoFAQ'
import SeoHeroBangalore from '@/Components/Seo/SeoHeroBangalore'
import SeoHowWeHelp from '@/Components/Seo/SeoHowWeHelp'
import SeoIntroSection from '@/Components/Seo/SeoIntroSection'
import SeoServices from '@/Components/Seo/SeoServices'
import SeoWhyUs from '@/Components/Seo/SeoWhyUs'

export const RealEstatePage = () => {
  return (
    <>
     <SeoHeroBangalore />
     <SeoIntroSection />
     <SeoHowWeHelp />
     <SeoServices />
     <SeoWhyUs />
     <SeoFAQ />
    </>
  )
}
