import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { GIPHY_API_KEY } from '../../helpers/api.key';
import AuthDialogComponent from '../auth-dialog/auth-dialog.component.vue';

@Component({
    components: {
        AuthDialogComponent
    }
})
export default class MainComponent extends Vue {
    public gifs: Array<{}> = []
    public serchValue: string = '';
    public isError: boolean = false
    public isLoading: boolean = true;
    private limit: number = 15;
    private offset: number = 0;
    public authDialog: boolean = false;

    mounted() {
        this.scroll() 
    }

    beforeMount() {
        this.getTrendingGifs()     
    }

    searchGif() {
        window.scrollTo(0, 0);        
        this.isError = false;
        this.isLoading = true;

        if (this.serchValue) {
            this.offset = 0;
                
            this.$http.get(`search?api_key=${GIPHY_API_KEY}&limit=${this.limit}&offset=${this.offset}&q=${this.serchValue}`).then((response: any) => {               

                response.body.data.forEach((element: any) => {
                    if (this.isEmpty(element.images.preview_gif)) {
                        element.images.preview_gif.url = element.images.original.url
                    }
                });
                
                this.gifs = response.body.data
                this.loading(500)
                
            }, error => {
                this.isError = true
            });
                
            
        } else {
            this.getTrendingGifs()
        }

    }

    getTrendingGifs() {
        this.$http.get(`trending?api_key=${GIPHY_API_KEY}&limit=${this.limit}&offset=${this.offset}`).then((response: any) => {

            response.body.data.forEach((element: any) => {
                if (this.isEmpty(element.images.preview_gif)) {
                    element.images.preview_gif.url = element.images.original.url
                }
            });

            this.gifs = response.body.data
            this.loading(500)
        
        }, error => {
            this.isError = true
        });
    }  

    scroll () {
        window.onscroll = () => {
            let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight * 0.95;

            if (bottomOfWindow) {

                this.offset += this.limit;

                if (this.serchValue) {                    
                    
                    this.$http.get(`search?api_key=${GIPHY_API_KEY}&limit=${this.limit}&offset=${this.offset}&q=${this.serchValue}`).then((response: any) => {
                        
                        if(response.body.data.length === 0) return
            
                        response.body.data.forEach((element: any) => {
                
                            if (this.isEmpty(element.images.preview_gif)) {
                                element.images.preview_gif.url = element.images.original.url                        
                            }
                            this.gifs.push(element)
                        });

                        this.loading(500)
                
                        
                    }, error => {
                        this.isError = true
                    });
                        
                    
                } else {
                    this.$http.get(`trending?api_key=${GIPHY_API_KEY}&limit=${this.limit}&offset=${this.offset}`).then((response: any) => {

                        if(response.body.data.length === 0) return

                        response.body.data.forEach((element: any) => {                
                            if (this.isEmpty(element.images.preview_gif)) {
                                element.images.preview_gif.url = element.images.original.url                        
                            }
                            this.gifs.push(element)
                        });
                
                        this.loading(500)
                    
                    }, error => {
                        this.isError = true
                    });
                }

            }
        }
    }

    isEmpty(obj: object) {
        for (var key in obj) {
            return false;
        }
        return true;
    }

    loading(time: number) {
        setTimeout(() => {
            this.isLoading = false                    
        }, time);
    }

    closeDialog(value: boolean) {
        console.log(value)
        this.authDialog = value;
    }
}