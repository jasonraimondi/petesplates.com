<script>
  import logo from '../assets/pete-plate-logo-center.jpg';
  import noLogo from '../assets/pete-plate-no-logo.jpg';
  import Card from '../components/Card.svelte';
  import Flag from '../components/flag/Flag.svelte';
</script>

<div id="animated" class="min-h-full bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 flex flex-col pb-4">
  <div class="md:container md:mx-auto py-10 flex-1">
    <header class="flex justify-start mx-4">
      <div class="flex justify-center pt-2 pr-2">
        <Flag/>
      </div>
      <div>
        <h1 class="text-3xl md:text-5xl font-bold text-white">St. Pete Rocks</h1>
        <h3 class="text-xs font-bold text-white">So why not rock some St Pete?</h3>
      </div>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 m-4">
      <Card
          title="Pete Plate"
          subtitle="Yes Logo"
          logo={logo}
          price="$24.99"
          description="This one includes the petesplates.com logo. We gotta get the word out somehow! "
          cartUrl="https://buy.stripe.com/9AQcNzaG8f1BakwdQR"
      />
      <Card
          title="Pete Plate"
          subtitle="No Logo"
          logo={noLogo}
          price="$34.99"
          description="This one does not include the petesplates.com logo. You gotta pay extra for that!"
          cartUrl="https://buy.stripe.com/6oEbJv29C3iTboA000"
      />
    </div>
  </div>

  <footer class="flex flex-col items-center justify-center">
    <p class="text-white mb-1">Made for you by <a class="font-semibold hover:underline"
                                                  href="https://jasonraimondi.com">me</a>.</p>
    <p class="text-xs text-white">Copyright &copy; 2023</p>
  </footer>
</div>

<style>
  #animated {
    background-size: 200% 200%;
    animation: gradient 8s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
</style>