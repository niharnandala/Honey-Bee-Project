$(document).ready(function() {
    //loadSound();
  
    var messages = {
      intro: [
           {
               type: "text",
               text: ["Hi, there.", "Hello!", "Hi!"],
               image: null,
               duration: 0,
               options: null
           },
           {
               type: "text",
               text: "Donating your change is a<br> great way to support our cause.",
               image: null,
               duration: 1200,
               options: null
           },
           {
               type: "text",
               text: "To get set up we'll only need<br> 3 minutes of your time.",
               image: null,
               duration: 3600,
               options: null
           },
           {
               type: "text",
               text: "Shall we get started?",
               image: null,
               duration: 6500,
               options: [
                   {
                       label: "Sure, let's go.",
                       cluster: "info_name"
                   },
                   {
                       label: "Hmm...Tell me more.",
                       cluster: "emergency"
                   }
               ]
           }
      ],
       info_name: [
            {
                type: "text",
                text: "Perfect",
                image: null,
                duration: 0,
                options: null
            },
           {
                type: "text",
                text: "By the way, if you have questions<br> at any point, head over to our <br><a href='#'>support section</a>.",
                image: null,
                duration: 1500,
                options: null
            },
              {
                   type: "text",
                   text: "So, what's your name?",
                   image: null,
                   duration: 4500,
                   options: [
                       {
                           label: "My name is <div data-input contenteditable></div>.",
                           cluster: "info_contact_preference"
                       }
                   ]
               }
        ],
        info_contact_preference: [
            {
                type: "text",
                text: "Great.",
                image: null,
                duration: 0,
                options: null
            },
            {
                type: "text",
                text: "And in case we need to send an<br> update, what's the best method<br> to reach you?",
                image: null,
                duration: 2000,
                options: [
                       {
                           label: "I prefer text message",
                           cluster: "info_phone"
                       },
                        {
                           label: "Email is best",
                           cluster: "info_email"
                       }
                   ]
            }
        ],
        info_email: [
            {
                type: "text",
                text: "Okay, what's your email?",
                image: null,
                duration: 0,
                options: [
                       {
                           label: "It's <div data-input contenteditable></div>.",
                           cluster: "connect_card"
                       }
                   ]
            },
        ],
        info_phone: [
            {
                type: "text",
                text: "Okay, what's your phone number?",
                image: null,
                duration: 0,
                options: [
                       {
                           label: "It's <div data-input contenteditable></div>.",
                           cluster: "connect_card"
                       }
                   ]
            },
        ],
        connect_card: [
            {
                type: "text",
                text: "Thanks for that.",
                image: null,
                duration: 0,
                options: null
            },
            {
                type: "text",
                text: "In the next step, we'll have you<br> connect your checking account <br>so that you can round up and<br> donate your change.",
                image: null,
                duration: 3000,
                options: null
            },
            {
                type: "text",
                text: "Just so you know, protecting<br> your privacy is our top priority <br>and we don't save any of your<br> banking information.",
                image: null,
                duration: 7000,
                options: null
            },
            {
                type: "text",
                text: "Is that okay?",
                image: null,
                duration: 12000,
                options: [
                       {
                           label: "Sure, let's keep going.",
                           cluster: "connect_bank"
                       }
                   ]
            }
        ]
    };
  
    playMessages("intro");
  
    $(document).on("click", "#responses li a", function(e) {
      var cluster = $(this).attr("data-cluster");
      var label = $(this).text();
      playMessages(cluster);
      $("#responses").removeClass("active");
      $("#messages ul").append(
        '<li class="you new"><div>' + label + "</div></li>"
      );
      setTimeout(function() {
        $(".you").removeClass("new");
      }, 10);
      e.preventDefault();
    });
  
    $(document).on("click", ".info, .close", function(e) {
      $("#info").toggle();
      e.preventDefault();
    });
  
    $(document).on("click", 'a[data-action="open-modal"]', function(e) {
      var id = $(this).attr("href");
      $("article").addClass("active");
      $("article section").hide();
      $("article " + id).show();
  
      //e.preventDefault();
    });
  
    $(document).on("click", 'a[data-action="close-modal"]', function(e) {
      $("article").removeClass("active");
      e.preventDefault();
    });
  
    function wordCycle() {
      $(".wordCycle:not(.cycling)").each(function() {
        $(this).addClass("cycling");
        var el = $(this);
        var words = $(this).attr("data-words");
        words = words.split(",");
        var length = words.length;
        var step = 0;
        setInterval(function() {
          el.text(words[step]);
          if (step < length - 1) {
            step++;
          } else {
            step = 0;
          }
        }, 400);
      });
    }
  
    function playMessages(messageCluster) {
      var length = messages[messageCluster].length;
  
      $.each(messages[messageCluster], function(key, msg) {
        setTimeout(function() {
          if (Array.isArray(msg.text)) {
            var text = msg.text[Math.floor(Math.random() * msg.text.length)];
          } else {
            var text = msg.text;
          }
  
          // Check card type
          if (msg.type == "text-image") {
            $("#messages ul").append(
              '<li class="text-image new item-' +
                key +
                '"><a href="#' +
                msg.id +
                '" data-action="open-modal"><div style="background: url(' +
                msg.image +
                ') no-repeat center center / cover;"></div><div>' +
                text +
                "</div></a></li>"
            );
          }
  
          if (msg.type == "image") {
            $("#messages ul").append(
              '<li class="image new item-' +
                key +
                '"><div style="background: url(' +
                msg.image +
                ') no-repeat center center / cover;"></div></li>'
            );
          }
  
          if (msg.type == "text") {
            $("#messages ul").append(
              '<li class="text new item-' + key + '"><div>' + text + "</div></li>"
            );
          }
  
          //window.scrollTo(0,document.body.scrollHeight);
          $("html, body").animate({ scrollTop: $(document).height() }, 700);
  
          $(".typing").addClass("active");
          setTimeout(function() {
            wordCycle();
            $(".item-" + key).removeClass("new");
          }, 300);
          if (msg.options != null) {
            $("#responses ul").empty();
            $.each(msg.options, function(op_key, op_val) {
              $("#responses ul").append(
                '<li><a href="#" data-cluster="' +
                  op_val.cluster +
                  '">' +
                  op_val.label +
                  "</a></li>"
              );
              $("#responses").addClass("active");
                   $("#responses div[contenteditable]").focus();
            });
            $(".typing").removeClass("active");
          }
        }, msg.duration);
      });
    }
  });
  