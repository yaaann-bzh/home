export const config = {
    hideModules: { 
        "code": true,
        "table": true,
        "removeFormat": true
    },
    image: {
        uploadURL: "https://back.yaaann.fr/index.php/api/admin/images",
        dropzoneOptions: {
            headers: {
                /* 'Authorization': 'Bearer ' + idToken */
            },
        }
    },
    maxHeight: "500px",
    forcePlainTextOnPaste: true,
}