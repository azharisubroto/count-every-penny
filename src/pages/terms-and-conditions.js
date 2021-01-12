import Head from 'next/head'
import NavBarForm from '@/components/NavBarForm'
import FooterMisc from '@/components/FooterMisc'

export default function privacyPolicy() {
  return (
    <>
      <Head>
        <title>Terms of Use</title>
      </Head>
      {/* NAVBAR */}
      <NavBarForm
        logoprops={{
          logoWidth: 245,
          logoHeight: 53
        }}
        style={{ padding: '10px 0' }}
      />
      <div className="page page--misc">
        <section className="page-title">
          <div className="container">
            <h1>Terms of Use</h1>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <section className="page-content">
                <div className="page-content__item">
                  <p>
                    This Count Every Penny Website www.counteverypenny.com.au is owned and operated by Asymmetric
                    Information (AI). Count Every Penny (CEP) is not a registered health benefits organisation. The
                    Website compares health insurance product options (Website).
                    <br />
                    <br />
                    The information contained in this Website has been prepared without taking into account your
                    objectives, financial situation or particular needs and should not be taken as financial advice. All
                    comparisons are prepared by our partner company Health Insurance Comparison (HIC). HIC and/or any
                    related companies will not be held responsible for the merits of this information to your
                    circumstances.
                    <br />
                    <br />
                    Before acting on the information and guidance provided by CEP and HIC, you should evaluate your own
                    individual needs, objectives and situation and which products are suitable. You will be sent product
                    information by the health insurer that you purchase cover from, and the standard information sheet
                    (SIS) applicable to that product. All products come with a 30 day cooling off period. Only
                    Australian Residents with access to Medicare are able to purchase the products advertised on the
                    website.
                  </p>
                </div>
                <div className="page-content__item">
                  <h4 id="toc-2">Acceptance of Terms </h4>
                  <p>
                    These terms govern your use of the Website. The other terms and conditions contained in the Privacy
                    Policy and on the Website also form part of CEP’s and HIC’s agreement with you (Terms). Please read
                    them carefully before proceeding. If you do not agree to these Terms, you must not use or access the
                    Website.
                    <br />
                    <br />
                    <strong>
                      If you do not wish to not to receive direct marketing communications from CEP or HIC, please do
                      not use this Website.
                    </strong>
                    <br />
                    <br />
                    Your use of and access to the Website is conditional upon your acceptance and compliance with these
                    Terms. Your use of and access to the Website constitutes your agreement to be bound by these Terms.
                    From time to time, CEP and HIC may change these Terms, without notice. Any subsequent use of or
                    access to the Website by you will mean that you have accepted the changes to these Terms.
                    <br />
                    <br />
                    These Terms are intended to be for the benefit of each of CEP and HIC, its related bodies corporate
                    and their respective personnel.
                    <br />
                    <br />
                    The pricing on this site is provided by third parties and is displayed in Australian dollars (AUD).
                    The amounts are subject to change with price revisions and do not include any further amount that
                    may be applied.
                    <br />
                    <br />
                    The Website provides an information service to obtain quotes and compare certain products and
                    services on the basis of particular criteria you may select including brand and price. The products
                    and services quoted and compared are not representative of all the products and services available
                    in the market. At times, not all brands may be available.
                  </p>
                </div>
                <div className="page-content__item">
                  <h4 id="toc-3">Do Not Call Register: Consent</h4>
                  <p>
                    For the purposes of the Do Not Call Register Act 2006 (if it applies) by submitting your telephone
                    number to the Website, you give your consent to be contacted by telephone on that number by either
                    the Website, any of its related bodies corporate and any of its associated affiliates. Your consent
                    will be deemed to be inferred consent and will continue until such time as you withdraw that
                    consent.
                  </p>
                </div>

                <div className="page-content__item">
                  <h4 id="toc-4">Consent to electronic marketing</h4>
                  <p>
                    For the purposes of the Spam Act 2003 (as applicable) by submitting your email address to the
                    Website, you give your consent to be contacted by email on that email address by CEP and HIC, any of
                    its related bodies corporate and any of its associated affiliates. Your consent will be deemed to be
                    express consent and will continue until such time as you withdraw that consent.
                  </p>
                </div>

                <div className="page-content__item">
                  <h4 id="toc-5">Commissions</h4>
                  <p>
                    CEP receives a commission payment from participating product providers for the services provided by
                    HIC on this Website, only when you join a policy and when the policy is approved and in force. You
                    are not required to pay us for our service nor does our service alter the premium you would be
                    charged if you were to buy this same policy directly from an individual fund. CEP may also receive
                    payment from other providers if your details have been referred to them in accordance with these
                    Terms.
                  </p>
                </div>

                <div className="page-content__item">
                  <h4 id="toc-6">Commission payable by us</h4>
                  <p>
                    We source referrals from a broad range of sources. For example, we may pay fees to call centre
                    companies, real estate agents, accountants, or lawyers for referring you to us. These referral fees
                    are generally small amounts and accord with usual business practices. These are not fees payable by
                    you. You may, on request, obtain a reasonable estimate of those commissions and how the commission
                    is worked out.
                  </p>
                </div>

                <div className="page-content__item">
                  <h4 id="toc-7">Limitations</h4>
                  <p>
                    In no event shall CEP, AI or its suppliers be liable for any damages (including, without limitation,
                    damages for loss of data or profit, or due to business interruption) arising out of the use or
                    inability to use the materials on the Website, even if CEP or an authorised representative has been
                    notified orally or in writing of the possibility of such damage. Because some jurisdictions do not
                    allow limitations on implied warranties, or limitations of liability for consequential or incidental
                    damages, these limitations may not apply to you.
                  </p>
                </div>
                <div className="page-content__item">
                  <h4 id="toc-8">Jurisdiction</h4>
                  <p>
                    These Terms are governed by the laws in force in New South Wales, Australia and you irrevocably and
                    unconditionally submit to the non-exclusive jurisdiction of the courts of New South Wales, Australia
                    and any courts which may hear appeals from those courts.
                  </p>
                </div>
                <div className="page-content__item">
                  <h4 id="toc-9">General Disclaimer Information</h4>
                  <p>
                    This site contains information, data, documents, pages and images prepared by CEP (Information) for
                    and on behalf of the Website. Whilst the Information contained in this Website has been presented
                    with all due care, the Website does not and CEP does not warrant or represent that the Information
                    is free from errors or omission.
                  </p>
                </div>
                <div className="page-content__item">
                  <h4 id="toc-10">Accuracy of information</h4>
                  <p>
                    Whilst the Information is considered to be true and correct at the date of publication, changes will
                    occur and changes in circumstances after the time of publication may impact on the accuracy of the
                    Information, and therefore the Information should not be relied upon. The Information may change
                    without notice and the Website is not and CEP is not in any way liable for the accuracy of any
                    Information printed and stored or in any way interpreted and used by a user.
                  </p>
                </div>
                <div className="page-content__item">
                  <h4 id="toc-11">Links To Third-Party Sites</h4>
                  <p>
                    The Information contained in this Website includes information derived from various third parties
                    and does not necessarily directly reflect any policies, procedures, standard or guidelines of the
                    Website.
                    <br />
                    <br />
                    The Website and CEP take no responsibility for the accuracy, currency, reliability and correctness
                    of any information included in the Information provided by third parties nor for the accuracy,
                    currency, reliability and correctness of links or references to information sources (including
                    internet sites) outside of this Website.
                    <br />
                    <br />
                    Links to other internet sites are not under the control of the Website and are provided for
                    information only. Care has been taken in providing these links as suitable reference resources.
                    However, due to the changing nature of the internet content, it is the responsibility of the users
                    to make their own investigations, decisions, enquiries about the information retrieved from other
                    internet sites. The Website welcomes links from most websites to this Website. If you create a link,
                    please follow these guidelines:
                  </p>
                  <ul className="check">
                    <li>
                      The correct name for this Website is Count Every Penny and the correct website address (URL) is
                      counteverypenny.com.au.
                    </li>
                    <li>
                      Links to this Website should generally be to the home page at www.counteverypenny.com.au. Linking
                      to other sections of the website may result in broken links, as page URLs occasionally change.
                    </li>
                    <li>
                      You may not reproduce, reframe or reformat the pages, images, files, information and materials
                      from this site on any other site without the permission of AI.
                    </li>
                    <li>
                      All links to the Website should be set to open in a new browser window and not within any other
                      frame. You must not use the link to provide, or in any way imply, endorsement by the Website, of
                      your organisation, services or products.
                    </li>
                    <li>
                      You must not copy or re-use content from this Website or attempt to pass it off as your own.
                    </li>
                    <li>You must not unlawfully use any of the material or content found on this Website.</li>
                  </ul>
                  <p>We would appreciate you contacting us to let us know if you are linking to our Website.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <FooterMisc style={{ marginTop: 0 }} />
    </>
  )
}
