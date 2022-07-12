<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class=" bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="./../assets/chennai-gold-logo-design-512-round-corner.png">
          </q-avatar>
          Chennai Gold Rates
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="./../assets/chennai-gold-logo-design-round-512-512.png">
          </q-avatar>
          <span>Chennai Gold Rates</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
    <q-footer class="bg-dark text-info" style="text-align:center" elevated bordered>Cybernet Developers</q-footer>

  </q-layout>
</template>

