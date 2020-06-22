---
title: "#HashTag Generator - The Excel Way"
excerpt: "Simple Hello world markdown post"
favicon: 👋
tags: [excel, insta]
---

<br>
<div class="msg info">
Just started an [Insta Store](https://www.instagram.com/bible.merch/) to make myself familiar with ecommerce and the like 
</div>
<br>

So the other day I was looking into [passive income](https://www.youtube.com/user/gottfried09) and got pretty hooked up on t-shirt designing on [teespring](https://teespring.com/).

> And after a few hours of YouTubing and reading the [manual](https://community.teespring.com/training-center/promoting-with-instagram/) created accounts in Insta and teespring.

And as every developer turned designer or designer turned developer, I have started on a path to automate some of the menial tasks... First one on the list was **#hashtag** generation. 

> After some more hours on Insta's API modules along with som FB's GraphQL and the [buggy](https://www.instagram.com/steffin_codes/?__a=1) zero auth url I didn't get what I wanted


What I had wanted to do was to get the list of hashtags followed by a given account. Seemed pretty simple even started a ~pen~ and deleted it. That's some hours I am not gonna get back ... *sigh 

So I came to to the trusty old excel, after getting some hashtags for a given keyword. Cleaned it up with Google's sorting and unique filter. sorted them out to `frequent` `average` and `rare`. Cause I have the formula to get the highest reach for each post.

```
Choose 3-4 frequent, 6-8 average and 12-16 rare hashtags related to your post. This proportion guarantees the highest reach for the post.
```

So there you have it. 
- 3 columns of hashtags in `$A` `$B` and `$C` without headers. 
- Made them into named ranges `featured_list` `average_list` and `rare_list` 
- One line of excel command to generate the list of 30 hashtags seperated by space :)

```
= not gonna show cause its not one line or one cell... might change this to vba or link tot hte excel sheet -.-
```

## reference
- [exceljet](https://exceljet.net/formula/random-value-from-list-or-table)
- [ablebits](https://www.ablebits.com/office-addins-blog/2018/01/31/excel-random-selection-random-sample/)