<template>
  <div id="app">
   <NavbarVue/>
    <router-view />
   
  </div>
</template>

<script>
/* eslint-disable */
import Button from 'primevue/button';
import NavbarVue from './components/Navbar.vue'




export default {
  name: 'App',
  components: {
    Button,
   NavbarVue
  },
  data() {
        return {
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-home'
                },
                {
                    label: 'Features',
                    icon: 'pi pi-star'
                },
                {
                    label: 'Projects',
                    icon: 'pi pi-search',
                    items: [
                        {
                            label: 'Core',
                            icon: 'pi pi-bolt',
                            shortcut: '⌘+S'
                        },
                        {
                            label: 'Blocks',
                            icon: 'pi pi-server',
                            shortcut: '⌘+B'
                        },
                        {
                            label: 'UI Kit',
                            icon: 'pi pi-pencil',
                            shortcut: '⌘+U'
                        },
                        {
                            separator: true
                        },
                        {
                            label: 'Templates',
                            icon: 'pi pi-palette',
                            items: [
                                {
                                    label: 'Apollo',
                                    icon: 'pi pi-palette',
                                    badge: 2
                                },
                                {
                                    label: 'Ultima',
                                    icon: 'pi pi-palette',
                                    badge: 3
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Contact',
                    icon: 'pi pi-envelope',
                    badge: 3
                }
            ]
        };
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
