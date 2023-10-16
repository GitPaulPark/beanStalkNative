import { toByteArray } from 'base64-js';

// export const base64toBlob = (base64, type) => {
//     const byteCharacters = atob(base64.split(',')[1]);
//     const byteNumbers = new Array(byteCharacters.length);
//     for (let i = 0; i < byteCharacters.length; i++) {
//         byteNumbers[i] = byteCharacters.charCodeAt(i);
//     }
//     const byteArray = new Uint8Array(byteNumbers);
//     return new Blob([byteArray], {type: type});
// };


export const base64toBlob = (base64, type) => {
    console.log(base64.length)
    const byteCharacters = toByteArray(base64.split(',')[1]);
    const byteArray = new Uint8Array(byteCharacters);
    return new Blob([byteArray], { type: type });
};
