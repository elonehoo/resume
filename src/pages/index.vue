<script setup lang="ts">
import resume from '~/resume.json'

</script>

<template>
  <div class="container">
      <section class="row">
        <div class="card-wrapper">
          <div class="card">
            <div class="profile-card">
                <div v-if="resume.profile !== undefined" class="profile-pic">
                  <img class="media-object img-circle center-block"
                    :alt="resume.profile.picAlt" :src="resume.profile.picSrc" itemprop="image">
                </div>
                <div class="contact-details">
                  <div class="name-and-profession">
                    <h3 class="text-bolder name" itemprop="name"> {{resume.contactDetails.name}}</h3>
                    <div class="text-muted job" itemprop="jobTitle">{{resume.contactDetails.job}}</div>
                  </div>

                    <div class="detail">
                      <span class="info">
                        <a :href="`mailto:` + resume.contactDetails.email" class="link-disguise" itemprop="email" target="_blank">{{resume.contactDetails.email}}</a>
                      </span>
                    </div>


                </div>

              <div class="social-links">
                  <a v-if="resume.socialLinks.github !== undefined" class="social-link icon" :href="resume.socialLinks.github" target="_blank">
                    <GitHub />
                  </a>
                  <a v-if="resume.socialLinks.linkedin !== undefined" class="social-link icon" :href="resume.socialLinks.linkedin" target="_blank">
                    <Linkedin />
                  </a>
                  <a v-if="resume.socialLinks.twitter !== undefined" class="social-link icon" :href="resume.socialLinks.twitter" target="_blank">
                    <Twitter />
                  </a>
                  <a v-if="resume.socialLinks.instagram !== undefined" class="social-link icon" :href="resume.socialLinks.instagram" target="_blank">
                    <Instagram />
                  </a>
                  <a class="social-link icon" :href="resume.socialLinks.user" target="_blank">
                    <User />
                  </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section class="row page">
        <div class="card-wrapper">
          <div class="card background-card">

            <h4 id="about"> <span class="title">About</span> </h4>
            <div class="card-nested" itemprop="description">
              <p v-html="resume.about">  </p>
            </div>
            <div class='px10'></div>

            <div id="work-projects-group">
              <div id="projects">
                <h4><span class="title">Projects</span></h4>
                <div class="list-unstyled projects">
                  <div class="project-table">
                    <li v-for="item in resume.projects.items" class="card-nested ">
                      <div class="content has-sidebar">
                        <p class="clear-margin-sm" itemprop="award">
                          <strong>{{item.name}}</strong>&nbsp
                            <a v-if="item.github_link !== undefined" :href="item.github_link" class='icon' target="_blank">
                              <GitHub />
                            </a>
                            <a v-if="item.home_link !== undefined" :href="item.home_link" class='icon' target="_blank">
                              <ArrowUpRight />
                            </a>
                        </p>
                        <p v-if="item.text_muted !== undefined" class="text-muted">
                          <small> {{item.text_muted}} </small>
                        </p>
                        <p v-if="item.github_stars !== undefined" class="github-stars">
                          <Stars class="stars" :url="item.github_stars" />
                        </p>
                      </div>
                    </li>
                  </div>
                    <li v-if="resume.projects.more !== undefined" class="card-nested text-muted">
                      <a :href="resume.projects.more" target="_blank">More Projects...</a>
                    </li>
                  <div class='px10'></div>
                </div>
              </div>

              <div id="work-experience">
                <h4> <span class="title">Work Experience</span> </h4>
                <ul class="list-unstyled">
                    <li v-for="item in resume.work" class="card-nested relax">
                      <div class="content has-sidebar">
                        <p class="clear-margin-sm">
                          <strong><a :href="item.link" target="_blank">{{item.name}}</a></strong>
                          <span class="text-muted" style="margin-left: 0.3em">{{item.job_name}}</span>
                        </p>
                        <p class="text-muted">
                          <small>
                            <span class="space-right"> {{item.space_right}}</span>
                          </small>
                        </p>
                        <p></p>
                          <ul class='highlight'>
                              <li v-for="date in item.highlight" v-html="date.content" />
                          </ul>
                      </div>
                    </li>
                </ul>
              </div>
            </div>

            <h4 id="skills"><span class="title">Stacks</span> </h4>
            <div class="card-nested" itemprop="description">
              <div class="skill-table">
                    <div class='name'>Frontend</div> 
                    <div>{{resume.stacks.frontend}}</div>
                    <div class='name'>Backend</div> 
                    <div>{{resume.stacks.backend}}</div>
                    <div class='name'>Mobile</div> 
                    <div>{{resume.stacks.mobile}}</div>
                    <div class='name'>DevOps</div> 
                    <div>{{resume.stacks.devOps}}</div>
                    <div class='name'>Languages</div> 
                    <div>{{resume.stacks.languages}}</div>
              </div>
            </div>
            <div class='px10'></div>

            <div id="education">
              <h4><span class="title">Education</span></h4>
              <ul class="list-unstyled">
                  <li v-for="item in resume.education" class="card-nested">
                    <div class="content has-sidebar">
                      <p class="clear-margin-sm">
                        <strong> {{item.profession}}</strong>,&nbsp;
                        {{item.school}}
                      </p>
                      <p class="text-muted clear-margin-sm">
                        <small>
                          {{item.time}}
                        </small>
                      </p>
                      <div></div>
                      <i></i>
                      <div class="space-top labels">
                        
                      </div>
                    </div>
                  </li>
              </ul>
            </div>


            <h4 v-if="resume.talks !== undefined" id="publications"><span class="title">Talks</span> </h4>
            <ul class="list-unstyled">
                <li class="card-nested" style="margin-bottom: 0.5em">
                  <div class="content has-sidebar">
                    <p class="clear-margin-sm">
                      <strong><a href="https://wemp.app/posts/5ec27920-8201-4ef2-9027-92b09b136fab" target="_blank">Binjiang Front-End Developer Salon, Hangzhou</a></strong>,&nbsp;
                      Bingjiang Front-End Union
                    </p>
                    <p class="text-muted clear-margin-sm">
                      <small> Sep 26, 2020 </small>
                      <small>,&nbsp;<a href="https://antfu.me/posts/binfe-2020-zh/" target="_blank">Slides</a></small>
                    </p>
                    <p class="clear-margin">Talked about the reactivity system and Composition API in Vue.js</p>
                  </div>
                </li>
            </ul>

            <h4 id="awards"><span class="title">Awards</span></h4>
            <ul class="list-unstyled">
                <li v-for="item in resume.awards" class="card-nested">
                  <div class="content has-sidebar">
                    <p class="clear-margin-sm" itemprop="award">
                      <strong>{{item.name}}</strong>,&nbsp;
                      {{item.unit}}
                    </p>
                    <p class="text-muted clear-margin-sm">
                      <small> {{item.time}} </small>
                    </p>
                    
                  </div>
                </li>
            </ul>




            <h4 id="languages"><span class="title">Languages</span> </h4>
            <p class="card-nested">
                <span class="enumeration"><strong>Chinese</strong> (Native speaker)</span>
                <span class="enumeration"><strong>English</strong> (Fluent)</span>
                <span class="enumeration"><strong>Japanese</strong> (Intermediate)</span>
            </p>

            <div style="text-align:center">
              <div class="detail no-print" style="font-size:1.5rem;margin-top:2rem;">
                <a href="https://resume.antfu.me/resume.pdf" class="info" itemprop="pdf" target="_blank">
                  PDF Version
                </a>
              </div>
               <div class="detail print-only" style="font-size:1.5rem;margin-top:2rem;" >
                <a href="https://resume.antfu.me" class="info" itemprop="pdf" target="_blank">
                  Online Version
                </a>
              </div>
              <div style="opacity:0.7; font-size:1.2rem;margin-top:1rem;">Last updated at December 4th 2020, 3:54:34 am</div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<style scoped>
.clear-margin {
  margin: 0;
}
.space-top {
  margin-top: 10px;
}
.space-right {
  margin-right: 10px;
}
.icon-left {
  margin-right: 5px;
}
.icon-right {
  margin-left: 5px;
}
.labels {
  word-spacing: 5px;
  line-height: 2;
}
.label-keyword {
  display: inline-block;
  background: #7eb0db;
  color: white;
  font-size: 0.9em;
  padding: 5px;
  border: 1px solid #357ebd;
}
.link-disguise {
  color: inherit;
}
.link-disguise:hover {
  color: inherit;
}
.clear-margin-sm {
  margin-bottom: 0;
}
.text-bolder {
  font-weight: bold;
}
.enumeration:last-child:after {
  content: '' !important;
}
.name-and-profession .name {
  font-size: 2.8rem;
  margin-bottom: 0;
}
.name-and-profession .job {
  margin-bottom: 0.5rem;
}
@media only screen {
  .container {
    display: grid;
    grid-template-columns: auto 15fr 50fr auto;
  }
  .container .page {
    max-width: 50em;
  }
}
@media (max-width: 768px) {
  ul {
    padding-left: 25px;
  }
  .container {
    display: block;
  }
  .card {
    padding: 1em !important;
  }
  .background-details {
    display: block;
  }
  .background-details .icon {
    max-width: inherit;
    min-width: inherit;
    text-align: left;
  }
  .background-details .icon,
  .background-details .info {
    display: block;
    padding: 10px 0;
  }
  .background-details .title {
    display: none;
  }
  .card-nested {
    padding: 5px 0;
  }
}
.profile-card {
  width: 100%;
  text-align: left;
}
.profile-pic {
  display: block;
  padding: 1rem;
}
.profile-pic img {
  width: 100px;
  height: 100px;
}
.contact-details .detail {
  display: block;
  line-height: 2;
}
.contact-details .detail .icon {
  padding-right: 7px;
  color: #888;
}
.contact-details .detail .info {
  font-size: 0.8em;
}
.social-links {
  margin-top: 1.5rem;
}
.social-link {
  padding: 0 0.6rem;
  color: inherit;
  opacity: 0.7;
}
.social-link:hover,
.social-link:focus {
  opacity: 1;
}
.social-link:first-child {
  padding-left: 0;
}
.social-link:last-child {
  padding-right: 0;
}
.social-link > * {
  vertical-align: middle;
}
a {
  color: inherit;
  text-decoration: none;
}
a:not(.icon) {
  border-bottom: 1px dashed #0005;
}
a:hover,
a:focus {
  text-decoration: none;
}
.background-card h4 {
  line-height: 1.2;
  font-size: 1em;
}
.background-card h4 .title {
  background: black !important;
  color: white !important;
  display: inline-block;
  padding: 2px 12px 0 3px;
  font-weight: bold;
}
.background-card h4:not(:first-child) {
  margin-top: 2em;
}
.content {
  line-height: 1.5;
}
.card {
  background: white;
  padding: 2em 3.5em;
}
.card-nested {
  padding: 0.8rem 0 0.8rem 2rem;
}
.card-nested.relax {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.card-wrapper {
  padding: 5px;
}
.enumeration:not(:last-child):after {
  content: ", ";
}
.enumeration:last-child:after {
  content: ".";
}
.github-stars {
  opacity: 0.6;
  font-size: 0.9em;
}
.projects {
  padding: 1rem 0;
}
.projects .text-muted {
  margin-bottom: 0.4rem;
}
.projects .icon {
  margin-right: 2px;
}
.px10 {
  height: 10px;
}
.skill-table {
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 1.5rem 1rem;
}
.skill-table .name {
  font-weight: bold;
  text-align: right;
}
.project-table {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem 1rem;
}
.print-only {
  display: none;
}
@media only screen and (max-width: 768px) {
  .profile-card,
  .contact-details,
  .profile-pic {
    display: block;
    text-align: center;
  }
  .card-nested {
    padding-left: 0;
  }
  .project-table {
    display: block;
  }
}
.card-skills {
  position: relative;
}
.skill-info {
  margin-left: 20px;
}
@media (max-width: 768px) {
  .quote {
    font-size: inherit;
  }
}
@media print {
  .name-and-profession .name {
    margin-top: -2rem;
  }
  .page {
    margin-top: -4rem;
  }
  .social-links {
    margin-top: 0.5rem;
  }
  body {
    font-size: 10pt;
  }
  a[href]:after {
    content: none !important;
  }
  .pagebreak {
    page-break-before: always;
  }
  .card {
    border: 0;
    padding: 0;
  }
  .text-muted {
    color: #777 !important;
  }
  .text-muted * {
    color: inherit !important;
  }
  .container {
    max-width: 100%;
    width: 100%;
  }
  .contact-details .detail .icon {
    color: #888 !important;
  }
  .labels {
    display: inline;
  }
  .skill-info {
    margin-left: 0;
  }
  .profile-card {
    text-align: center;
  }
  .print-only {
    display: inherit;
  }
  .no-print {
    display: none;
  }
  .project-table {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.8rem 1rem;
  }
  .highlight {
    margin-top: -0.3rem;
  }
  blockquote {
    font-size: 100%;
  }
  .card-nested {
    padding: 0.1rem 0 0.1rem 1rem;
  }
  .card-nested.relax {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .skill-table {
    grid-gap: 0.8rem 0.5rem;
  }
  .background-card h4:not(:first-child) {
    margin-top: 1em;
  }
  #work-projects-group {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 2fr 4fr;
    page-break-after: always;
  }
}
</style>
