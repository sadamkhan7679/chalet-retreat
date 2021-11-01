export const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const getTitleFromSlug = (slug: string) => {
  const title = slug.toString().replace(/_/g, ' ')

  return title.charAt(0).toUpperCase() + title.slice(1)
}
