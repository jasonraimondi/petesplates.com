<script>
  import logo from '../assets/pete-plate-logo-center.jpg';
  import noLogo from '../assets/pete-plate-no-logo.jpg';
  import Card from '../components/Card.svelte';
  import Flag from '../components/flag/Flag.svelte';
</script>

<div id="animated" class="min-h-full bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 pb-4 flex flex-col">
  <div class="container mx-auto py-10 flex-1">
    <header class="flex justify-center">
      <div class="text-center ml-4 mb-8">
        <h1 class="text-5xl font-bold text-white">St. Pete Rocks</h1>
        <h3 class="ml-[8rem] text-xs font-bold text-white">So why not rock the St Pete flag?</h3>
      </div>
      <div class="flex justify-center pt-3 pl-3">
        <Flag />
      </div>
    </header>

    <div class="grid sm:grid-cols-2 gap-4">
      <Card title="Pete Plate"
            subtitle="Yes Logo"
            logo={logo}
            price="$24.99"
            description="This one includes the petesplates.com logo. We gotta get the word out somehow! "
            cartUrl="https://buy.stripe.com/5kA7vSgn67La1eE7ss"
      />
      <Card title="Pete Plate"
            subtitle="No Logo"
            logo={noLogo}
            price="$34.99"
            description="This one does not include the petesplates.com logo. Ya gotta pay extra for that!"
            cartUrl="https://buy.stripe.com/5kA7vSgn67La1eE7ss"
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