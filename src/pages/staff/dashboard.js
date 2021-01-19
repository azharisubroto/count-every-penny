import Head from 'next/head'
import DashboardLayout from '@/layout/DashboardLayout'

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <DashboardLayout>
        <div>Test</div>
      </DashboardLayout>
    </>
  )
}
