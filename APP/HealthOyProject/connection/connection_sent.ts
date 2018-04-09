// $(document).ready(function(){
// $.post( "http://www.students.oamk.fi/~t6ishe01/Healthdev/get_video.php", function( data ) {
//   console.log( "Data Loaded: " + data );
// });
// });




export class HomePage {
  pages: string = "app";
  displayData = [];

  constructor(public navCtrl: NavController, public http: Http) {

  }

  ionViewDidLoad(){
    this.http.get('http://www.students.oamk.fi/~t6ishe01/Healthdev/get_video.php')
    .map( data => data.json() )
    .subscribe( parsed_data => {
      this.displayData = parsed_data;
    })
}