import VePlayer from '@byteplus/veplayer';
import '@byteplus/veplayer/index.min.css';

const playerSdk = new VePlayer({
    id: 'video',
    url: 'xxx.mp4'
});

const player = new VePlayer({
    id: 'video',
    width: 600,
    height: 400,
    url: "https://demo.vod.com/xxx.mp4",
    vodLogOpts: {
      line_app_id: 100001441, // [Required] The Application ID for Video On Demand, which is an integer value. You can obtain it from the SDK management > Applications page in the BytePlus VOD console.
      line_user_id: '', // The user ID, either a string or an integer. If not provided, a random value will be generated based on the user's browser.
      tag: 'Normal Video', // A tag corresponding to the type of the content, used to differentiate different scenarios in the business for multidimensional analysis in the future.
    }
  });