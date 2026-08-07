---
layout: page
title: About
---

<p class="message">
  SPO aims to catalogue the prefaces, dedications, tables of content, and errata composed by early English stationers (1500-1700).
</p>

<p>
  In <i>The Brand of Print</i> (2019) I sought to understand the intricate and unique ways print agents (booksellers, printers, editors, stationers, and publishers) manipulated the space of the paratext. As I argue in the book, paratexts offered print agents visual, rhetorical, and affective spaces for addressing bookbuyers directly and forging relationships that were both financial and social in nature. Some of the project’s key research questions were: what do stationers’ paratexts teach us about the print marketplace? And what happens when we take a bird’s eye view of these paratexts as a genre unto themselves?
</p>

<p>
  In order to answer these questions, I began the painstaking work of combing through Early English Books Online (EEBO) for examples of epistles, dedications, errata, and any other paratexts authored or designed by print agents. Despite EEBO’s search capabilities (and even after its integration with EEBO-TCP), this work was slow and mostly manual, as it required scrolling through each stationer’s catalogue and reading the first few pages to identify non-authorial front and back matter. While sometimes the print agent would helpfully label an epistle, “the printer to the reader,” patron dedications and prefaces were not often titled, and only occasionally signed.
</p>

<p>
  To build my research dataset, I turned to Franklin B. Williams’ <i>Index of Dedications and Commendatory Verses in English Books before 1641</i> (1962). Williams gathered all dedications and epistles he could find, organizing them by author and dedicatee with their corresponding Short-Title Catalogue (STC) numbers. However, while this index contains a large number of paratexts by (or addressed to) print agents and stationers, one must still peruse each record individually to know exactly what kind of paratext is included in the printed text, what that text is, and when it was published. All these details (genre, style, date) matter greatly to the early modern researcher. 
</p>

<p class="message">
  <b>Stationers’ Paratexts Online</b> aims to be a research tool to aid the work of paratextual studies, particularly those focused on the work of the print marketplace. This database expands the records from Williams’ Index, and, once completed, will allow users to filter results by trade, genre, paratext type, and even gender (more on that later!). The dataset currently includes roughly 600 entries from Williams’ Index (adding or correcting additional copies not listed or misattributed).</p><p> I am currently in the process of adding paratexts printed or authored by women stationers, many of which were excluded from Williams due to later publication dates (post 1641) or paratext types (e.g. advertisements, errata, and other paratexts beyond dedications and verses). This labor is even slower and more manual than working through EEBO with Williams! So, if you have any entries you’d like to suggest, feel free to do so <a href="https://forms.gle/fmpyhTfKQzaMrs7S8">here</a>.
</p>

<p>
  This project has been a long time coming; given the demands of academia and the complex support structures for small-scale digital humanities projects, it will continue to be updated slowly. While this front-end searchable database continues to develop, researchers are invited to download the dataset in .CSV format to explore on their own. The most up-to-date dataset will always be available <a href="https://github.com/andiesilva/stationersparatextsonline">on this project’s central GitHub repository</a>.
</p>

<h1>Documentation</h1>

<p>
  This project documents paratexts written or designed by stationers from c.1500-1700. It includes only works printed in English (excluding Latin, French, or Spanish titles printed in England).
</p>

<h2>Normalization</h2>

<p>
  I maintain original early modern spelling and syntax, with the exception of changing u/v, i/j, vv/ww where needed for the sake of clarity. I do not capitalize nouns when transcribing titles of paratexts or book titles. When cataloguing authors and stationers, spelling of names has been regularized to the most common spelling as listed in STC and the Oxford Dictionary of National Biography (e.g. "John Day" and not "Jhon Daie"). However, the "imprint" metadata maintains original spelling.
</p>

<h2>Data Model</h2>

<p>
  Data in this project is organized according to the following structure:
</p>

<p>
  <b>Paratext Author</b>: The individual who signed or is presumed to have authored the paratexts in each printed book. These are typically printers, publishers, booksellers, or editors, though occasionally the name of the book’s author or translator will appear here if they wrote an epistle “to the stationer.”
</p>

<p>
  <b>Gender</b>: The paratext author’s presumed gender assigned at birth. This category helps us filter results to find only women stationers, or texts which were published by several stationers.
</p>

<p>
  <b>Imprint</b>: Transcribed to include only the title page imprint, without any later additions or conjectures from the STC. Additional information can be found in “additional stationer” and in notes.
</p>

<p>
  <b>Trade</b>: Trades are listed according to how the stationer refers to themselves in the text, with additional trades listed after consultation with the British Book Trade Index (BBTI) and the Consortium of European Research Libraries (CERL) Thesaurus (particularly useful for information on women printing outside of England).
</p>

<p>
  <b>Additional Stationer</b>: Any other printers, publishers, or booksellers associated with the publication, whether listed in the imprint or conjectured by STC.
</p>

<p>
  <b>Publication Author</b>: Official or named author as listed in the ESTC. This may also include translators.
</p>

<p>
  <b>Additional Authors</b>: Any collaborators or original language authors. 
</p>

<p>
  <b>Title</b>: Full title as listed in the ESTC.
</p>

<p>
  <b>Genre</b>: Genre as listed in EEBO/ESTC or additional genres added by the USTC (when useful).
</p>

<p>
  <b>Year</b>: Publication year as listed on title page or amended by STC.
</p>

<p>
  <b>Paratext Title</b>: The title as printed in the text. When signed, author’s name is added in parenthesis.
</p>

<p>
  <b>Paratext Type</b>: List of possible paratexts include: table of contents, index, errata, to the reader, catalogue, advertisement, dedication, to the stationer (dedications from authors to stationers), permission.
</p>

<p>
  <b>Dedicatee</b>: When relevant, includes the formal name and/or title of the dedicatee 
</p>

<p>
  <b>Assumed Dedicatee Gender</b>: Presumed gender assigned at birth. 
</p>

<p>
  <b>Illustration</b>: Lists whether text contains any illustrations (aside from title page).
</p>

<p>
  <b>STC/Call Number</b>: STC or Wing call number
</p>

<p>
  Additional Paratexts: Lists any authorial or editorial paratexts by title
</p>

<p>
  <b>Notes</b>: Additional conjectures by STC, Williams, or Silva.
</p>

<p>
  <b>Copy From</b>: Names the library copy used to generate EEBO scans.
</p>


<h1>Contributors & Acknowledgements</h1> 

<p>
  I am grateful to the PSC CUNY Research Awards and the CUNY Research Foundation for generously funding earlier stages of this project. Thank you also to Laura Estill and Simone Chess for contributing feedback and encouragement at earlier stages of this project, and to Tuka Al-Sahlani for her work with data gathering.
</p>

<p>
  Early work for this project was conceptualized at the Digital Humanities Summer Institute.
</p>


