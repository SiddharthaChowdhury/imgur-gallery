export const TYPE_GALLERY_RESPONSE = "GALLERY_RESPONSE";
export const TYPE_GALLERY_IMAGE_SELECT = "GALLERY_IMAGE_SELECT";

export const actionGalleryRes = ( data, isPage ) => ({
    data,
    isPage,
    type: TYPE_GALLERY_RESPONSE
})

export const actionGallerySetIndex = ( indexValue ) => ({
    indexValue,
    type: TYPE_GALLERY_IMAGE_SELECT
})