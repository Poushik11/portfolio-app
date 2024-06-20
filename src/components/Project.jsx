import ProjectC from "./ProjectC";

import "../styles/Project.css";
import publmang from "../images/publication.png";
import housJun from "../images/home-junction.png";
import trendfeed from "../images/trendfeed.png";
import aisum from "../images/aisum.png";
import quizapp from "../images/reactQuiz.png";

function Project() {
  const ProjectsData = [
    {
      name: "Trend Feed",
      info: "Context,Redux,Api",
      infor:
        "TrendFeed is a dynamic news platform built using React and Context API, leveraging the NewsAPI for real-time updates. Users can browse and categorize news articles across various topics, as well as switch between multiple languages for a personalized reading experience. TrendFeed ensures a seamless and responsive interface, providing the latest news tailored to user preferences.",
      image: trendfeed,
      // image:
      //   "https://private-user-images.githubusercontent.com/115363626/333496910-61ca1a67-8306-4cc0-917e-4e6c2831ab76.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgwMjQ1MzAsIm5iZiI6MTcxODAyNDIzMCwicGF0aCI6Ii8xMTUzNjM2MjYvMzMzNDk2OTEwLTYxY2ExYTY3LTgzMDYtNGNjMC05MTdlLTRlNmMyODMxYWI3Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYxMFQxMjU3MTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ZTg5Y2EzZDJjMTVkODBlN2Q0ZTY5NDk2MmJhNjUzMTNlYjc4ODYwODhhZDYxNzJiOTA5ZjQ2ZjVlYTI2MDNlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.--4LswoEMAg1k5XlBhZYjZFYG1zeaTWO8ojbyZpTPSM",
      link: "https://github.com/Poushik11/TrendFeed",
      git: "https://github.com/Poushik11/TrendFeed",
    },
    {
      name: "Drawing App",
      info: "Canvas,HTML,CSS,JS",
      infor:
        "Welcome to The Drawing App! This easy-to-use application, made in Canvas, lets you have fun creating and playing with different shapes and colors.you can create and manipulate various shapes to bring your creativity to life. It's a straightforward way to have some artistic fun!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6ENxkxVCwtdpGgxauOQTUEOrm-5WoTkgkg&usqp=CAU",
      link: "https://draw11.netlify.app/",
      git: "google.com",
    },
    {
      name: "To-Do-React",
      info: "React",
      infor:
        "Please make sure to create a comprehensive to-do list for the day, outlining all the tasks and activities you need to complete.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNnbslAgzAHsoBoeXUPaB5vi2tR9k7OrxlA&usqp=CAU",
      link: "https://todo11psy.netlify.app/",
      git: "https://github.com/Poushik11/To-Do-React",
    },
    {
      name: "Home Junction",
      info: "Firebase, React , Slick",
      infor:
        "HomeJunction is a modern web app built with React and Firebase, designed for selling or renting properties. Leveraging geolocation APIs, it helps users find nearby listings with ease. Users can contact landlords directly, as well as update, delete, and manage property details seamlessly.",
      image: housJun,
      // image:
      //   "https://private-user-images.githubusercontent.com/115363626/338192749-aaf61e57-51cc-4df4-be43-53400f113220.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgwMjQ2MzMsIm5iZiI6MTcxODAyNDMzMywicGF0aCI6Ii8xMTUzNjM2MjYvMzM4MTkyNzQ5LWFhZjYxZTU3LTUxY2MtNGRmNC1iZTQzLTUzNDAwZjExMzIyMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYxMFQxMjU4NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00ODhlYzBlNmU5Y2I4OTkzMGE4ZTdhNzk0OThiYzUwZWVlZDJiZjVkMjQ2ODU3YmEwZjE5ZWQ4MDQzN2RjYzQ5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.RoPjk_bz6w2cftHd9ngWSYWO_7AArnEr-05b7tp8qow",
      link: "https://home-junction.netlify.app/",
      git: "https://github.com/Poushik11/HomeJunction",
    },
    {
      name: "Expense Tracker",
      info: "React(Hooks)",
      infor:
        "Introducing our Expense Tracker project, built with React and using state hooks. This application simplifies the process of tracking expenses among friends. Easily keep a record of who owes what, making it a handy tool for maintaining financial transparency and ensuring everyone's expenses are accounted for.",
      image:
        "https://blog.sheetgo.com/wp-content/uploads/2020/08/finance-processes-blog-images-05.png",
      link: "https://poushik-s-projects.web.app/",
      git: "google.com",
    },
    {
      name: "Publication Management",
      info: " NextJS,Context,Nodemailer,Tailwind ",
      infor:
        "This project proposes a user-friendly software solution that streamlines data entry, organization, and simplifies reporting by allowing selection of required columns. By providing role-based access and customizable reports, the system empowers faculty and administrators to efficiently manage publication data, ultimately showcasing the college's research achievements. element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).",
      image: publmang,
      // image:
      //   "https://private-user-images.githubusercontent.com/115363626/338200883-a47e4698-01e3-46dd-9e27-dba5ddd2783c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgwMjU2MTcsIm5iZiI6MTcxODAyNTMxNywicGF0aCI6Ii8xMTUzNjM2MjYvMzM4MjAwODgzLWE0N2U0Njk4LTAxZTMtNDZkZC05ZTI3LWRiYTVkZGQyNzgzYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYxMFQxMzE1MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00NjEzMzkyNTlhZjkzMTNlZWM4ZjU4NGE0ZDNjZjViYzkwMDI0MDQwYzI4OTUwMWY2ZTc3NDNkYzhkMjhkODM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.FptaspSYtyqBVvsSoQ7JkyUTJ0BbWNEW9wAabUOStvk",
      link: "https://publication-management.vercel.app/",
      git: "/",
    },
    {
      name: "Realtime Chat Application",
      info: "Socker.io,React,NodeJS (FreeCodeCamp)",
      infor:
        "This is a real-time chat app using Socket.IO and React.This app allows users to send and receive messages instantly. Socket.IO handles real-time WebSocket communication, while React provides the interactive user interface",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAACoCAMAAACCN0gDAAAB1FBMVEU/ScwAGHD///8/Ssk+Ssw/Sc4AEms6SMaa2eoAFmgAF2s/SNBBTNA2QroAFWsZKpImM54LHnwyQK0qNqUAD29GT8tpccU7RMxcZsIrOsHO4vHH1eYxO80vO62d3+tgf9Q5Qc2Mv9pec8ve4+iPltja4+JibcxbYsO3yegBF3QAAHOg1+7///gAEGoAAGoAG2sAAGBXYckACWw5SLtQcqYAD3a/v71BRtNEUL5ZXc1IVLxyf9m9s9w/UcmoodJse87j6/l8fsiVpNozOtT3+f+om9vu+vJcTs/FyO5+ecji2+lziNePmd5Xas6jqNqUmM3//eq2pt6hluF0i82WjMTq8/eIhMlmatiKmecXL3sfNIA6UJYuR4MmO4ETKHE9YJtLZKtWfrEwTZU2UoxgkMlDaZhKcbVJfqMhO3EyT4w/frUvRZczV6UrSnxAXIiSl7dSXZSxucZidY1neaF+b68AAFWEj6+Fdperp7JwZpBrgbaYj7ofL2yFcdK8y/fIyth/bL9flNqAsuJjkNuCqNhJV4UGFVlnbpmPgKqGn7JNUZVdct58qeiLxvcZLIc6cp9dX4B3kLxtWo+CkaOhvsKlobKJvtWBnbtomsF9r8krUoNFeZa5idoSAAAPiUlEQVR4nO2di0PTSP7Ak04moQnUg19ilwOxgjxCCYE+CI/r+lxO1wX2fq73s480pUCwogtsf+Kdy90uIMvigpyr8tj9Z28SRFBammGRNJqPtoGUavNhZvKdyTczBHFMKOGs/71dXA1NOhPfOQ6UPGIIPzuuLNeWa8u1ZQXXFg6uLRxcWzi4tnCwwxZR5bP7sI+Jrwa5OHVbzi1b8NRtwSre7sM+JvQ5rvQR79miIEGhB8GZgilqdycBD2ys2CLAGbsP+5hUCxi2AAegoADICTFAQYEyiiVSRnEcB9Hegg1gobKFvFY5ElCyGh6wpTCVnEIRHNJDcYSiGPs4tGEYhuBA4X+qUNki0M86Eguu3tqCva2cwLRWMn6hr0/wK/193d19fiLW2t3d3RomBMWiLQAICBwJhWHLP+D5S32s4/P6S5c9nstX6q96PJ6O4WtXOjwdnuutCihYp4vY4hyJpcK1Z+uSx9NKdXxROfjlzcam63+9Othy9oanZcBzs7WvO0YpBc0XseVMrMjat9Vx58sqz+e3PDfrA40dF7/yCPVDni8ueYYvjtwkrLfyyBZhd53Ch7Kqa9/WiGfE88XVr1vrlSHP5yPXBeqzwb9d8lz/+vqNACQEi7bQibR0/6HsoABmu3WpI9bW0fG/tz03awOXPN985YkFUNk67/nsWn0tVUnECqkvaIs59z+OpKpIUFnEVn9s8OsvYnfu/P2K0W55bp5t83QPdHzzfy0tvZxitSYSTLWvjKFputhLZJX16NQ/MNh97So6JzY2eTxfnq29i06Jd0bqBwY7Bjs8ZxVQsJkv2POR7A7KjwlOzwcKfVw43BcDMNDXGggIQndrN1cLBBRttbYChbEanUJnjUHQJL27MXrVGGMQqHGmUDBvRO1+hoIxRiEEYIRZ0I/CTWi55/PGFirydlp4lzgdF9k4GY+TaVlOp9PVaR9Js+RzmkyQCYlk5YRMkt5zROmW650xCEvnhSNtmaOB0WRKTaus3ZLeICY0PTKlZbSUntO0iKZlcpk0nxjVMomsls2NSePeZIZHtuwaO/1tVB8dVcukdIl8MjIxoacmcyktoW08uKeldZmXI9r9XHIsp90L3e/SZVG0yxY9pWu6psXt1rQL61X1bCSj6qkHicSThxlt9KE+lmDpTFZX1Yimz4ua9MAr2le2aJqXJL5MihYpij5eCnl5mqe9PO+VQpIUisskLYZ8PPqkXpInJVJk7auJTsS95oODawsHu2yxrIhaC9J8GBuyXGKJI7HLluiLkl086etsl0RRRidnWbRbhQXsssV/G+mcnmHV2dnvOjvbO7t8omuruK12bTo/mydz//9oemX1u7bZ+agTqqJdtkITc2OzW9W5x4+m8y//sfrsn1HZbhUWsM2WFmmfzlenvn+Rf/Hk+7lnv6IIsPyx7ZxIomY9Lf40P9/JzpOk7IhG3r54izcjB1Y0aqDRwotOaOZtsyXKqN/Fog3SxCJjPgfIcmN5LFxbOLi2cMCxRQX8RC3gFGikJhEwxnEAFLzi6tpCx+2v+1dvUz1TK9Req7pWX1tbq1RxJa8YfbK2Av/+l3J9oO6G0Nb897rLszfa+tpiQqlLIJ+urbofA4O37/xw68vhv9T9eHfwh94qpnBijWsL1cSrTT/cuD19+er12ZG6vpHPLw/c7S/55oK2nHqtGqeVh3BgIExdORvovgJaYr23zoavxArmA5awBc85NacZK4IADGPmXhH+MESnRoWqp47TyjvXFtY1HwUAhVA4wHFQAYQAmMJpNSVt1XwStpAmwABGAAIHYkZuMwGPU7aoME97HQldZT1/61gUsiWE/+RMwiUDpg9gC1ZW2p2dfDwgpEpnU560Lcr4X50I6vOd/j1kyJczMX/Rp27ro8a1hcPJ27J4W8Opg3PPRfF/Y9cWx3DQuIsC570F8+WBYHd7XQRhl6Kvc7B0IumeLaZRCQfqmZJ9w1K2wBnemZyhYOlbFPdsXRvvXjrfvzBkIWn8KFtEmJdZR+I7Z977a80WXFj4bHxxaQ2n2S7Yq5aMy4cOBGvEZm3h/NLSUuP5P2iLO8eblxBFki2b2wxonjeyTnkfz9NSFD1LkpHpzNMkL/FRnuRFyYfXq4a9rdRQP9NS8O4nHFtG/pZISrLsLZfBCD6uPczcm8pMJfVEJjem5R5kMz/5ZC2bkZ9H4pHnkibpcRpvDMIPFcgpBE6zVTQDPKtruq5NJMqjdIlySo9oo6nfc7kJWZ/U7unxTDqanYwkc/OZSXpU2pbHVUxbgAAUhZ5OwJakRSKaNr6dLg9bPlSitNFkbuJBIqvf07WIquVYUdJz+nxSvZ3VHkXksYyEZ4tTgFG0IMFZeNPRtkRyikwm5bJJ2kpn4ynZm5DjMplNxROqqmanZF+cTMT5h50pPp2mVRlzNFAADDBuXA0LpUeYS9gyb82ifeVRsgxoWiLf3Cy2h/kNSUoH7yHDaOX7+2IMgyJxpcjcD1i2SNKIYOySczxwbPnXdtZ7uysr+/qNQWbXVglbi/1LSwvrtxcXT6BsGelaPsMWerBOyN0ywLPVuLb0tOL80qJQ+D5XHFuGJNKIUZErr09kRbFsWvziYNlaejreu7Aw1HgrZv2ezqLRqYQCZTEq8SIfEr1RnhejdrsoDV7+VqCeY/xMmGEU5g/a4uWVleXU/PLyzE8rK+mV1Lcz6eVyCeyLg2dLAIQxMM1RfzjeCuVXXsxNr07Pzm3lh1dXpqe3Xv4csltGSWzLl8/nt/Kv6pZn5+Z+fr31+Pu51T//VP5tvV22ot6VaXU5xz77rn1mNp5PqallByTe2HYPGRlSyagvyrbLnSnSFxV5+aNr5U/OFvmmm2EgmQGXAwIIN6cZC9cWDq4tHFxbOLi2cHBt4eDawsG1hYNrCwfXFg6YtjAndvvYbGFdIWM4hSs8I2/xTN8iOTZ2H/fxkGosFJi3OTZM+P0BeYpBAIrCsiX8qdqZnGGgdVt9Qy1Dje/R0tIyFDsiqalgBjhgnAkFrduCjYyfOZxwD4VfiOJziRdcu8D4T50IUbwOvWvLSDht9B8+SohebYSF55YvZotwasZ8aVXv2Kos9AZcWx85ri0cDtqCAXOPuVzNm2l4XVvv8NYWpGBsPQACBAOZa+F6P1MFUaTFYbdbFKh0JOgwrUWnpi3CsOWHtxYHBhZvrw2tLT1dIo5hC9SccSY1lRZWXThgi+hdrw1cWFgbX1tcuLC0uPYU4tviqkSfvXnvx0WswrQVCy6uLSwurS0uxtb7lxbvoqKJbSssOSxvaw/6HI4t1MoDIRYDMQYIAiMAJma8GbeVN6++slHWmHPLTENnRdunwRMlWvShP5JE8jxJi6w3Kso+kafZqI+NkuhhXPO03Kt+awsFaWDvGZgB27Fs0VPpuJfn2XRSlugySD/NplVZnkpnVVlNq3FVfa76onyaVL1i1hsnvWleTbMki2ur0MvHsMUnc8n7Y1NJXb+nJbNPbE9GSiTvZ8b0ZETVxnIRXRvLjGXmeXVUT6ZSmfnbdHpcHc15sW0dWm7NOPpj2JIe3Ht+f0KbjES00bHMpO3JSFJGi0Q2UvkHqpYc07XfNDUj8d77Y3pq/sHDfFS6n9Vw8+UbGUWBhzrVsKqFwepVm6OBciaZTGmjOU1Dv86k3VXRp+qqlpvXEtl4Wk+NaZGUlpuSvVk1E1d1OSmns3JG9eFlgA/09vYf6g8zVN8vR6ShFh07lSSeD3XyqHXled7u1C0fK9E8L/E0TdIh9HlCIi89R+dAYxEftJNljR/AHGkO/3JoeMuglQFYo4G7Oc27U1EaUQy5m61rL8bc2jKLPhUps3t79tj7Fs8WRzGE/x2g8cQZszvg2jLnSDdMmdOm2122yN0p3He/IN/7NOzefhvnO2UlVLqMidLZ/Q9sPIllHLnatS6G8RtEJepdNbvVwP5yVhTbMil5vtPrQyH8I3HfmCj6OqOPXFuHbIVGltv+MzLv65ru4rt8oRA6E4XYkJTp2Xrc7pOkclpz6wC25TTP5Ld+3pp7vTI9PPvi9dbW6o3ZJ6+/6Zr5tetpfnruxmyaLoOW/xD21cS6mdnHsy9/fv2q/RX/+lX164uvXk4/mvlVmp1bfT0386vtIVghbDsndm6pT56tbM2sPHn5bO5JPp3PP5vLd05NT6devHj8z+QzsRzPjZZscR/AFttOt9N8O98eape6QjwdCkXbu6q9Ujvb2W4G92Uoy5ItAAk3x8bEii2owFbXloEVWzHOtbWLBVswUO/WxF0s2OKG71Z1u7YMStoS/Bebm1rdmmhSyhYH/F81N7W4tkws2Lro2tqjlC3FtXWAUrYgQ7i23uLawqHU2Klr6yB2lC1Y49SsEakGHpl8+kHKVlW1RDsOSZL46vDp24IgXONMwsLRc+l+EFvw/aR7J2DkMJTKAv8Qtj5eXFs4uLZwcG3hwAHo2rIMRwQuNjU3nuho4MeLoAQuNje3uOtiWAJwTHdbW8ytiZaAUFBAWHHLlnW4k73m85HjrueDwwnZMnpZp7jaTDE4yJiriQGM6S1Kr9W2zwnZAhQHOcV2BGNdUcRekrEFAtAPLc+He1K2OKW2LOBiRuGKnb913iqNhPX5cE/IFoT9//6z/dS1xRQKgt5gsMEqFcE1v+X1B07Kln+4o8NjOx0dw37IMY0VwYqGigrzUZKGYNVp2wKBNrtN7dIWoKD/fEFNwWK+aj9dW7V7toxadrAEFS1pwU/Y1n7ZuhB86wd9uR6suFBmtpo9d+6Uia2G/OQY0lSxiRxtbgQr7o1vqeubwYq9v8FNpHDTVlv/aOrpaW5u7mnuaerZ3dhna1Xb3pyI7Pw2uf375G8VDWMb+dyLycjqxPYOemH74ebEd9sbozsNhi3La1ucrK0eE1NT8yx67umxzVbFk+DydjKyk9nUJ4ITFRUT30YyExFtM69deKLtjKqr46vbCX27wlZbqESZtnp6Zs0vmprvnGr52i9bO6mN4OTo5uTm5NbvGw3Bye3tyM7G9ubGxuboxs6EdiHy7dPfJy7YWbbeobln8PRDsP2yFTSCrqAZOATNTQPaBNGTsRN9O4FUmSfK8rBlC0fEW4fOhcG9c+KnbeuSNVtvI4hP25a1srUfb52+rbLpJxIEN2R0l4t2dPbqYdCsig0N65YHbE5ufKt3uK4MaDOXYoVLi4uLF6yxvjhUfMaLD2SLI4C/3n6Y2npzJDTgZ5iARRiMVf1OyhYlCOB0J5E8DACKsjtBGweB+WksHAQHABCsHvFJ1UQAYRkMzFNAMPt8hjqLitHPWlgy/mRtfSIgW/8F02GAaX1IIKYAAAAASUVORK5CYII=",
      link: "https://github.com/Poushik11/RealTime-Chat-Application",
      git: "https://github.com/Poushik11/RealTime-Chat-Application",
    },
    {
      name: "AI Text Summarizer",
      info: "NodeJS,Hugging Face API,HTML (Postman API Bootcamp)",
      infor:
        "An user-friendly text summarization application using Node.js, Replit, the Hugging Face Inference API, and Postman to explore APIs and generate code.",
      image: aisum,
      link: "https://github.com/Poushik11/AI-Text-Summarizer",
      git: "https://github.com/Poushik11/AI-Text-Summarizer",
    },
    {
      name: "Quiz APP ",
      info: "UseReducer,React ",
      infor:
        "A simple Quiz app built in react useReduer hooks (Course Project )",
      image: quizapp,
      link: "https://github.com/Poushik11/QuizApp",
      git: "https://github.com/Poushik11/QuizApp",
    },
  ];
  return (
    <div>
      <p className="trans">Some Projects: </p>

      <div className="main" id="project">
        {ProjectsData.map((project, index) => (
          <ProjectC
            key={index}
            name={project.name}
            link={project.link}
            git={project.git}
            image={project.image}
            info={project.info}
            infor={project.infor}
          />
        ))}
      </div>
      {/* <Reveal>
        <button onClick={() => navigate("/projects")} className="custom-button">
          View More
        </button>
      </Reveal> */}
    </div>
  );
}

export default Project;
