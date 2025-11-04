# Gallery Images

Place your gallery images in this folder with the following naming convention:

- `img1.jpg` - First image
- `img2.jpg` - Second image
- `img3.jpg` - Third image
- ... and so on

## Image Recommendations

- **Format**: JPG or PNG
- **Size**: Optimize images for web (recommended: 800x800px to 1200x1200px)
- **File Size**: Keep under 500KB per image for best performance

## Updating the Gallery Component

If you add more images, update the `galleryImages` array in `src/components/Gallery.jsx` with:
- Image filename
- Descriptive alt text for SEO (e.g., "VIRIBUS Fitness Gym - [Description]")

The gallery displays 9 images per page with pagination automatically handling multiple pages.
