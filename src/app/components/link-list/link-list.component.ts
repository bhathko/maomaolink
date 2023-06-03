import { Component } from '@angular/core';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent {
  linkList  = [
    {
      title: '毛線兒 の 打賞箱',
      imageUrl: 'assets/donate-logo.svg',
      url: 'https://l.instagram.com/?u=https%3A%2F%2Fqrcodepay.line.me%2Fqr%2Fpayment%2F6r395EuGr5olHItEPWFOH1GiWqXYLHdeFwem%25252FyrveRd7%25252BNrDq%25252F3MkZ1apx3s%25252Bgmo&e=AT0gz7y7A4wZqdDwuzvUZULxwrUNj8VBp3bIkkmSQicBB0xPpehMbkbPWy8ad5OuysK63BdiKV9aKdL-BnpW_kKdmHKfB3zb5XHZgw',
      isCoin: true
    },
    {
      title: '毛線兒 の Instagram',
      imageUrl: 'assets/instagram-logo.svg',
      url: 'https://www.instagram.com/heyclaire1220/',
      isCoin: false

    },
    {
      title: '毛線兒 の Youtube',
      imageUrl: 'assets/youtube-logo.svg',
      url: 'https://www.youtube.com/@gingergirl1220',
      isCoin: false
    },
    {
      title: '毛線兒 の 週邊貼圖',
      imageUrl: 'assets/line-logo.svg',
      url: 'https://store.line.me/stickershop/author/800360/zh-Hant',
      isCoin: false
    },
    {
      title: '毛線兒 の Facebook',
      imageUrl: 'assets/facebook-logo.svg',
      url:'https://www.facebook.com/profile.php?id=100069145989915',
      isCoin: false
    },
  ]
}
