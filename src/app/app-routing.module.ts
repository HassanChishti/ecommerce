import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create-account',
    loadChildren: () => import('./create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'password-recovery',
    loadChildren: () => import('./password-recovery/password-recovery.module').then( m => m.PasswordRecoveryPageModule)
  },
  {
    path: 'recovery-code',
    loadChildren: () => import('./recovery-code/recovery-code.module').then( m => m.RecoveryCodePageModule)
  },
  {
    path: 'new-password',
    loadChildren: () => import('./new-password/new-password.module').then( m => m.NewPasswordPageModule)
  },
  {
    path: 'helo-card',
    loadChildren: () => import('./helo-card/helo-card.module').then( m => m.HeloCardPageModule)
  },
  {
    path: 'full-profile',
    loadChildren: () => import('./full-profile/full-profile.module').then( m => m.FullProfilePageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'flash-sale',
    loadChildren: () => import('./flash-sale/flash-sale.module').then( m => m.FlashSalePageModule)
  },
  {
    path: 'clothing',
    loadChildren: () => import('./clothing/clothing.module').then( m => m.ClothingPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'settings-profile',
    loadChildren: () => import('./settings-profile/settings-profile.module').then( m => m.SettingsProfilePageModule)
  },
  {
    path: 'recieve',
    loadChildren: () => import('./recieve/recieve.module').then( m => m.RecievePageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'state1',
    loadChildren: () => import('./state1/state1.module').then( m => m.State1PageModule)
  },
  {
    path: 'state2',
    loadChildren: () => import('./state2/state2.module').then( m => m.State2PageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
