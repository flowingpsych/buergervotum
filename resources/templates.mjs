/**
 * @overview HTML templates of ccm component for quick questions
 * @author André Kless <andre.kless@web.de> 2020
 * @license The MIT License (MIT)
 */

import { html } from 'https://unpkg.com/lit-html';
import { unsafeSVG } from 'https://unpkg.com/lit-html/directives/unsafe-svg';

export const main = ( instance, event, next, prev, add ) => html`
  <header>
    <h1>${instance.text.title}</h1>
  </header>
  <main>
  
    <!-- section: add new question -->
    <section id="add" ?data-hidden=${!add}>
      <article>
        <h1>${instance.text.add_title}</h1>
        <div contenteditable>${instance.text.add_placeholder}</div>
      </article>
    </section>
    
    <!-- section: results for previous question -->
    <section id="prev" ?data-hidden=${add||!prev}>
      <article></article>
    </section>
    
    <!-- section: current question -->
    <section id="next" ?data-hidden=${add}>
      <article>
        <h1 ?data-hidden=${!prev}>${instance.text.next}</h1>
        <p>${next && next.text}</p>
        <nav>
        
          <!-- button: answer question with yes -->
          <div class="icon" title="${instance.text.yes}" @click=${event.yes}>${unsafeSVG(instance.icon.yes)}</div>
          
          <!-- button: answer question with neither yes nor no -->
          <div class="icon" title="${instance.text.neither}" @click=${event.neither}>${unsafeSVG(instance.icon.neither)}</div>
          
          <!-- button: answer question with no -->
          <div class="icon" title="${instance.text.no}" @click=${event.no}>${unsafeSVG(instance.icon.no)}</div>
          
        </nav>
        <nav>
        
          <!-- button: like question -->
          <div class="icon" title="${instance.text.like}" @click=${event.like}>${unsafeSVG(instance.icon[next.likes[instance.user.getValue().key]?'like_on':'like_off'])}</div>
          
        </nav>
      </article>
    </section>
  </main>
  <footer>
    <nav>
    
      <!-- button: add question -->
      <div class="button" title="${instance.text.add}" @click=${event.add} ?data-hidden=${add}>
        <div>${unsafeSVG(instance.icon.add)}</div>
        <div>${instance.text.add}</div>
      </div>
      
      <!-- button: confirm new question -->
      <div class="button" title="${instance.text.confirm}" @click=${event.confirm} ?data-hidden=${!add}>
        <div>${unsafeSVG(instance.icon.confirm)}</div>
        <div>${instance.text.confirm}</div>
      </div>
      
      <!-- button: share question -->
      <div title="${instance.text.share}" @click=${event.share} ?data-hidden=${add||true}>${unsafeSVG(instance.icon.share)}</div>
      
      <!-- button: cancel new question -->
      <div class="button" title="${instance.text.cancel}" @click=${event.cancel} ?data-hidden=${!add}>
        <div>${unsafeSVG(instance.icon.cancel)}</div>
        <div>${instance.text.cancel}</div>
      </div>
      
      <!-- button: report question -->
      <div class="button" title="${instance.text.report}" @click=${event.report} ?data-hidden=${add}>
        <div>${unsafeSVG(instance.icon.report)}</div>
        <div>${instance.text.report}</div>
      </div>
      
    </nav>
  </footer>
`;