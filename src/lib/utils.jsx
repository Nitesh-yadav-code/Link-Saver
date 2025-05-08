// Function to format date
export function formatDate(dateString) {
  if (!dateString) {
    console.error("Invalid dateString:", dateString);
    return "Invalid Date";
  }

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    console.error("Invalid date value:", dateString);
    return "Invalid Date";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
  
  // Function to extract metadata from a URL
  export async function extractMetadata(url) {
    // In a real app, this would make a server request to fetch and parse the HTML
    // For this demo, we'll simulate the response with mock data
  
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500))
  
    // Generate a consistent favicon based on the domain
    const domain = new URL(url).hostname
    const favicon = `https://www.google.com/s2/favicons?domain=${domain}`
  
    // Generate a title based on the URL
    let title = domain.replace(/^www\./, "")
  
    // Add some variety to the titles
    if (url.includes("github")) {
      title = "GitHub Repository | " + title
    } else if (url.includes("youtube")) {
      title = "YouTube Video | " + title
    } else if (url.includes("twitter") || url.includes("x.com")) {
      title = "Tweet | " + title
    } else if (url.includes("medium")) {
      title = "Medium Article | " + title
    } else if (url.includes("dev.to")) {
      title = "Dev.to Article | " + title
    } else if (url.includes("docs")) {
      title = "Documentation | " + title
    } else {
      title = title.charAt(0).toUpperCase() + title.slice(1) + " | Website"
    }
  
    return {
      title,
      favicon,
    }
  }
  
  // Function to generate a summary for a URL
  export async function generateSummary(url) {
    // In a real app, this would use an AI service or web scraping
    // For this demo, we'll generate mock summaries
  
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
  
    const domain = new URL(url).hostname
  
    // Generate different summaries based on the domain
    if (url.includes("github")) {
      return "This GitHub repository contains code and documentation for a software project. It includes features, installation instructions, and contribution guidelines for developers interested in the project."
    } else if (url.includes("youtube")) {
      return "This YouTube video presents educational or entertainment content. The creator has shared their knowledge or creativity through this visual medium, potentially including tutorials, reviews, or storytelling."
    } else if (url.includes("twitter") || url.includes("x.com")) {
      return "This tweet contains a short message, potentially including images, videos, or links. It may be part of a larger conversation or thread discussing current events, personal thoughts, or industry news."
    } else if (url.includes("medium")) {
      return "This Medium article explores a topic in depth, providing analysis, insights, and perspectives. The author has shared their expertise or experience through this long-form content piece."
    } else if (url.includes("dev.to")) {
      return "This Dev.to article discusses software development concepts, tools, or practices. It's written for developers and may include code examples, tutorials, or career advice relevant to the tech industry."
    } else if (url.includes("docs")) {
      return "This documentation page provides technical information, guides, and reference materials. It helps users understand how to use a product, service, or technology effectively."
    } else {
      return (
        "This webpage contains information, products, or services related to " +
        domain.replace(/^www\./, "").replace(/\.(com|org|net|io)$/, "") +
        ". It may include articles, resources, or interactive elements relevant to visitors interested in this topic or brand."
      )
    }
  }
  