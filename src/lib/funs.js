export const getDate = (date) => {
  const d = new Date(date);
  return d.toDateString();
};

export const fetcher = (url) => fetch(url).then((response) => response.json());


export const getRelativeTime = (date) => {
  const d = new Date(date);
  const now = new Date();
  const diff = now - d;
  const seconds = diff / 1000;
  if (seconds < 60) {
    return `${Math.floor(seconds)}s ago`;
  }
  const minutes = seconds / 60;
  if (minutes < 60) {
    return `${Math.floor(minutes)}m ago`;
  }
  const hours = minutes / 60;
  if (hours < 24) {
    return `${Math.floor(hours)}h ago`;
  }
  const days = hours / 24;
  if (days < 30) {
    return `${Math.floor(days)}d ago`;
  }
  const months = days / 30;
  if (months < 12) {
    return `${Math.floor(months)} months ago`;
  }
  const years = months / 12;
  return `${Math.floor(years)}y ago`;
};

export const getRelativeViews = (views) => {
  if (views < 1000) {
    return views;
  }
  if (views < 1000000) {
    return `${Math.floor(views / 1000)}k`;
  }
  return `${Math.floor(views / 1000000)}m`;
};

export const makeSlug = (str) => {
  return str.toLowerCase().replace(/ /g, "-");
};


export function convertToCloudinaryUrl(originalUrl) {
    // Prefix for Cloudinary fetch URL
    const cloudinaryPrefix = 'https://res.cloudinary.com/practicaldev/image/fetch/';
    
    // Encode the URL part after 'fetch/'
    const encodedUrl = encodeURIComponent(originalUrl);
    
    // Construct the final Cloudinary URL
    const cloudinaryUrl = `${cloudinaryPrefix}${encodedUrl}`;
    
    return cloudinaryUrl;
}


// Function to upload a file to Discord via webhook
export async function uploadFileToDiscord(file, text, webhookURL = "https://discord.com/api/webhooks/1209461004518432778/zMKaNOteB0b0M3Aq7WykfAk2KkODHFISU9Uh6GG7pvBJF1PGsYfSfpuB4TJgegtlnmnt") {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('payload_json', JSON.stringify({ content: text }));

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Failed to upload image (HTTP ${response.status}): ${response.statusText}`);
        }

        const responseData = await response.json();
        const imageUrl = responseData.attachments[0].url;
        return imageUrl;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw new Error('Error uploading image to Discord.');
    }
}


export const handleImageUpload1 = async (file,text = 'Uploaded via NovelEditor') => {
  try {
    // Step 1: Upload image to Discord
    const discordImageUrl = await uploadFileToDiscord(file, text);

    // Step 2: Convert Discord image URL to Cloudinary URL
    const cloudinaryImageUrl = convertToCloudinaryUrl(discordImageUrl);

    return cloudinaryImageUrl;
  } catch (error) {
    console.error('Error handling image upload:', error);
    return "www.example.com/failed-upload.png"; // Return a fallback URL in case of error
  }
};