const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Asynchronous function, Prompt to select media stream, pass to video element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){
        //  catch errors
        console.log('whoops, error here:', error);
    }

    
    
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On load

selectMediaStream();