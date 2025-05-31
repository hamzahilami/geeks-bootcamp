class Video{
    constructor(title,uploader,time){
        this.title=title
        this.uploader=uploader
        this.time=time
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
    }
}
const video1 = new Video('The Coolest Coding Tutorial', 'Alice', 300);

video1.watch()
const video2 = new Video('Amazing Nature Documentary', 'Bob', 1200);

const videoData = [
  { title: 'JavaScript Basics', uploader: 'Alice', time: 300 },
  { title: 'Amazing Nature Documentary', uploader: 'Bob', time: 1200 },
  { title: 'Cooking Masterclass', uploader: 'Carol', time: 600 },
  { title: 'Travel Vlog', uploader: 'Dave', time: 900 },
  { title: 'Music Video', uploader: 'Eve', time: 240 }
]

const videos = videoData.map(
  ({ title, uploader, time }) => new Video(title, uploader, time)
)
videos.forEach(video => {
  console.log(video.watch());
})