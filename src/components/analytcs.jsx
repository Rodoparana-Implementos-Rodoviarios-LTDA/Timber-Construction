import Script from 'next/script'

const Analytics = () => (
  <>
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-KY94CH7M7R"/>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KY94CH7M7R');
</script>
  </>
)

export default Analytics;