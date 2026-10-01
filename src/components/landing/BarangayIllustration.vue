<template>
  <svg
    viewBox="0 0 240 210"
    width="240"
    height="210"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Flat illustration of a barangay hall with a Philippine flag"
    fill="none"
  >
    <!-- ground shadow -->
    <ellipse cx="120" cy="196" rx="92" ry="9" fill="#E2E8F0" />

    <!-- building body -->
    <rect x="42" y="100" width="150" height="96" rx="4" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />

    <!-- roof slab -->
    <rect x="34" y="87" width="166" height="16" rx="4" fill="#BFDBFE" />
    <rect x="34" y="87" width="166" height="6" rx="3" fill="#93C5FD" />

    <!-- windows -->
    <rect x="56" y="122" width="26" height="30" rx="3" fill="#DBEAFE" stroke="#BFDBFE" stroke-width="1.5" />
    <rect x="92" y="122" width="26" height="30" rx="3" fill="#DBEAFE" stroke="#BFDBFE" stroke-width="1.5" />
    <rect x="158" y="122" width="26" height="30" rx="3" fill="#DBEAFE" stroke="#BFDBFE" stroke-width="1.5" />

    <!-- entrance portico -->
    <rect x="126" y="130" width="46" height="66" fill="#EFF6FF" />
    <rect x="130" y="130" width="6" height="66" fill="#DBEAFE" />
    <rect x="162" y="130" width="6" height="66" fill="#DBEAFE" />
    <rect x="142" y="140" width="26" height="56" rx="2" fill="#2563EB" />

    <!-- front steps -->
    <rect x="116" y="196" width="66" height="8" rx="2" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1" />

    <!-- potted plant -->
    <rect x="196" y="182" width="16" height="14" rx="3" fill="#CBD5E1" />
    <ellipse cx="204" cy="174" rx="10" ry="12" fill="#86EFAC" />
    <circle cx="199" cy="168" r="7" fill="#BBF7D0" />

    <!-- flag pole -->
    <rect x="212" y="54" width="3" height="142" rx="1.5" fill="#94A3B8" />
    <circle cx="213.5" cy="51" r="3.5" fill="#64748B" />

    <!-- Philippine flag -->
    <rect x="187" y="56" width="27" height="17" fill="#2563EB" />
    <rect x="187" y="67" width="27" height="6" fill="#DC2626" />
    <polygon points="187,56 187,73 197,64.5" fill="#FFFFFF" />
    <circle cx="191" cy="64.5" r="2" fill="#F59E0B" />
  </svg>
</template>

<script setup>
</script>

<style scoped>
svg {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>