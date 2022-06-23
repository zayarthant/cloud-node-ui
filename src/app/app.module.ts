import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NoteComponent} from './widget/note/note.component';
import {WelcomeLogoComponent} from './widget/static/welcome-logo/welcome-logo.component';
import {NoteDetailComponent} from './widget/note-detail/note-detail.component';
import {NoteEditorComponent} from './widget/note-editor/note-editor.component';
import {ConfirmAlertComponent} from './widget/static/confirm-alert/confirm-alert.component';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
  {path: '', component: WelcomeLogoComponent},
  {path: 'note', component: NoteDetailComponent},
  {path: 'editor', component: NoteEditorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    WelcomeLogoComponent,
    NoteDetailComponent,
    NoteEditorComponent,
    ConfirmAlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
