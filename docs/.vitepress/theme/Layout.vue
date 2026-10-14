<script setup lang="ts">
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <footer class="HMFooter">
        <div class="HMFooter__links">
          <a href="https://henrymeyer.de/legal/imprint">Imprint</a>
          <span aria-hidden="true">•</span>
          <a
            href="https://github.com/HMLabs-HQ/.github/blob/main/CODE_OF_CONDUCT.md"
            >Code of Conduct</a
          >
        </div>

        <div class="HMFooter__notices">
          <div>© 2026 Henry Meyer.</div>
          <div>Code licensed under MIT • Content under CC0 1.0</div>
          <div>A <a href="https://hmlabs.eu">HMLabs</a> Project.</div>
        </div>
      </footer>
    </template>
  </Layout>
</template>
