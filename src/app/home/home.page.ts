import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class HomePage {

  // Set 'zh' (Cantonese) as the default language
  // currentLang: 'zh' | 'en' = 'zh';
  currentLang: string = 'zh';

  running_on_mobile_boolean: boolean = true;  

  constructor() {}


  // Function to switch languages
  toggleLanguage() {
    this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
  }

  shareGuide() {

    const shareData = {
      title: 'RGTS Quick Start Guide',
      text: 'Use odds data to perform smart horse screening and race analysis.',
      url: 'https://rgts-hk.com/quickstart/'
    };

    // Check if native Web Share API is available in the current browser
    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback: Copy link automatically if system share sheet is blocked
      navigator.clipboard.writeText(shareData.url).then(() => {
        alert(this.currentLang === 'en' 
          ? 'Link copied to clipboard! You can paste and send it to your desktop.' 
          : '網址已複製到剪貼簿！你可以直接貼上並傳送至電腦開。'
        );
      }).catch(err => {
        // Hard fallback display text if clipboard permissions fail
        alert(`URL: ${shareData.url}`);
      });
    }
  }


}
