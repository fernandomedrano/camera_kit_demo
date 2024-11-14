/* import { 
    bootstrapCameraKit,
    createMediaStreamSource,
    Transform2D,
} from '@snap/camera-kit'

(async function(){
    var cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI5OTY5ODQwLCJzdWIiOiI2YzdiMDFjOS0yMWYzLTRkYzgtYmM3Yi1lNzExNTBlYmE2MzV-U1RBR0lOR341NGYyYTMxZC1lMDExLTQ1YzEtYjIzNi04MzJjM2FmMGEzM2UifQ.6H0BzP-08_4TOjFrO-wJL0rLb1ci9NzegmrEs54r0e4' })
    
    const session = cameraKit.createSession()
    document.getElementById('canvas').replaceWith((await session).output.live)

    const { lenses } = await cameraKit.lensRepository.loadLensGroups(['d810e131-4b8f-446e-807d-f86b93a65f3c'])

    session).applyLens(lenses[0])

    let mediaSteam = await navigator.mediaDevices.getUserMedia ({ video: true });

    const source = createMediaStreamSource(mediaSteam, {
        transform: Transform2D.MirrorX,
        cameraType: 'front'
    })

    await session.setSource(source)
    session.source.setRenderSize(window.innerWidth, window.innerHeight)

   session.play()

})(); */

/* import { boostrapCameraKit, createMediaStreamSource } from '/tests/snap/node_modules/@snap/camera-kit';
//import { boostrapCameraKit, createMediaStreamSource } from '@snap/camera-kit';

(async function main() {
  const apiToken =
    'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI5OTY5ODQwLCJzdWIiOiI2YzdiMDFjOS0yMWYzLTRkYzgtYmM3Yi1lNzExNTBlYmE2MzV-U1RBR0lOR341NGYyYTMxZC1lMDExLTQ1YzEtYjIzNi04MzJjM2FmMGEzM2UifQ.6H0BzP-08_4TOjFrO-wJL0rLb1ci9NzegmrEs54r0e4';
  const cameraKit = await bootstrapCameraKit({ apiToken });

  const canvas = document.getElementById('my-canvas');
  const session = await cameraKit.createSession({ liveRenderTarget: canvas });
  session.events.addEventListener('error', (event) => {
    if (event.detail.error.name === 'LensExecutionError') {
      console.log(
        'The current Lens encountered an error and was removed.',
        event.detail.error
      );
    }
  });

  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  const source = createMediaStreamSource(stream, {
    transform: Transform2D.MirrorX,
    cameraType: 'front',
  });
  await session.setSource(source);

  const lens = await cameraKit.lensRepository.loadLens(
    'f6dd21e9-6845-482b-84d8-6aaa98d32eb1',
    'd810e131-4b8f-446e-807d-f86b93a65f3c'
  );
  await session.applyLens(lens);

  await session.play();
  console.log('Lens rendering has started!');
})();

main(); */