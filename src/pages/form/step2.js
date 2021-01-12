import FormHero from '@/components/FormHero'
import Form from '@/layout/Form'
export default function Step2() {
  return (
    <>
      <FormHero headline="Let’s add your age and current health fund." step={2} />
    </>
  )
}

Step2.Layout = Form
