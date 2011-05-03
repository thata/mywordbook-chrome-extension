function highlight(element, word) {
  var nodes = element.childNodes;
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (node.nodeType == 1 && node.getAttribute("class") != "highlight") {
      // 要素内を走査する
      // ただし、ハイライト済みの要素は無視する
      highlight(node, word);
    } else if (node.nodeType == 3) {
      var text = node.data;
      if (new RegExp("\\b" + word + "\\b").test(text)) {
        var newText = text.split(word).join("<span class=\"highlight\">" + word + "</span>");
        jQuery(node).replaceWith(newText);
      }
    }
  }
}

function main() {
  var elements = document.getElementsByTagName("body");
  if (elements.length == 0) {
    return;
  }
  var body = elements[0];
  highlight(body, "Tool");
  highlight(body, "Ruby");
  highlight(body, "Vim");
  // highlight(body, "ACM");
  // highlight(body, "ADVERTISEMENT");
  // highlight(body, "API");
  // highlight(body, "Abel");
  // highlight(body, "About");
  // highlight(body, "Access");
  // highlight(body, "According");
  // highlight(body, "Agile");
  // highlight(body, "Agile");
  // highlight(body, "Akka");
  // highlight(body, "Akka");
  // highlight(body, "Alex");
  // highlight(body, "Algorithms");
  // highlight(body, "All");
  // highlight(body, "Allen");
  // highlight(body, "Also");
  // highlight(body, "Amazon");
  // highlight(body, "Amazons");
  // highlight(body, "Anniversary");
  // highlight(body, "AppCloud");
  // highlight(body, "AppCloud");
  // highlight(body, "AppFabric");
  // highlight(body, "Apple");
  // highlight(body, "Appliance");
  // highlight(body, "Apps");
  // highlight(body, "Apr");
  // highlight(body, "Architecture");
  // highlight(body, "Architecture");
  // highlight(body, "Architecture ");
  // highlight(body, "Architecture");
  // highlight(body, "Articles");
  // highlight(body, "Avoiding");
  // highlight(body, "Avram");
  // highlight(body, "Azure");
  // highlight(body, "Azure.");
  // highlight(body, "Based");
  // highlight(body, "Beyond");
  // highlight(body, "Big");
  // highlight(body, "Blewitt");
  // highlight(body, "Boost");
  // highlight(body, "Build");
  // highlight(body, "Builder™");
  // highlight(body, "Buyer’s");
  // highlight(body, "By");
  // highlight(body, "C");
  // highlight(body, "Caching");
  // highlight(body, "Cactus");
  // highlight(body, "Case");
  // highlight(body, "Cloud");
  // highlight(body, "Cloud.");
  // highlight(body, "Comes");
  // highlight(body, "Communities");
  // highlight(body, "Community");
  // highlight(body, "Community");
  // highlight(body, "Computation");
  // highlight(body, "Computing");
  // highlight(body, "Concerns");
  // highlight(body, "Contactus");
  // highlight(body, "Content");
  // highlight(body, "Continues");
  // highlight(body, "Contribute");
  // highlight(body, "Control");
  // highlight(body, "Dan");
  // highlight(body, "Data");
  // highlight(body, "Data");
  // highlight(body, "Datacenter");
  // highlight(body, "Dataflow");
  // highlight(body, "Datapower");
  // highlight(body, "Days");
  // highlight(body, "Debasish");
  // highlight(body, "Devastating");
  // highlight(body, "Development");
  // highlight(body, "Development");
  // highlight(body, "Diablo");
  // highlight(body, "Discuss");
  // highlight(body, "Discusses");
  // highlight(body, "Domain");
  // highlight(body, "Domain-Specific");
  // highlight(body, "Download");
  // highlight(body, "Dynamic");
  // highlight(body, "EC2");
  // highlight(body, "East");
  // highlight(body, "Educational");
  // highlight(body, "Effectiveness");
  // highlight(body, "EngineYard");
  // highlight(body, "Engineer");
  // highlight(body, "Evan");
  // highlight(body, "Evolution");
  // highlight(body, "EvolutionofCodeDesignatFacebook");
  // highlight(body, "Experiences");
  // highlight(body, "Explained");
  // highlight(body, "Expressway");
  // highlight(body, "Failure");
  // highlight(body, "Featured");
  // highlight(body, "Feedback");
  // highlight(body, "Feedback");
  // highlight(body, "Feedback");
  // highlight(body, "Fees!");
  // highlight(body, "Flash®");
  // highlight(body, "Floyd");
  // highlight(body, "Foundation");
  // highlight(body, "Foundry");
  // highlight(body, "Free");
  // highlight(body, "Functional");
  // highlight(body, "GIL");
  // highlight(body, "Gateway");
  // highlight(body, "GeneralFeedback");
  // highlight(body, "Ghosh");
  // highlight(body, "GitHub");
  // highlight(body, "Gosh");
  // highlight(body, "Group");
  // highlight(body, "Guardian");
  // highlight(body, "Guide");
  // highlight(body, "Gunnar");
  // highlight(body, "Hazrati");
  // highlight(body, "Host");
  // highlight(body, "Hudson");
  // highlight(body, "IBM");
  // highlight(body, "Identity");
  // highlight(body, "Improve");
  // highlight(body, "In");
  // highlight(body, "In-spite");
  // highlight(body, "InfoQ");
  // highlight(body, "Intel");
  // highlight(body, "Interest");
  // highlight(body, "Interviews");
  // highlight(body, "Is");
  // highlight(body, "It’s");
  // highlight(body, "JVM.");
  // highlight(body, "Java");
  // highlight(body, "Java");
  // highlight(body, "Jenni");
  // highlight(body, "Job");
  // highlight(body, "Jonathan");
  // highlight(body, "Kannan");
  // highlight(body, "Knuth");
  // highlight(body, "Languages");
  // highlight(body, "Languages");
  // highlight(body, "Languages");
  // highlight(body, "LargeScaleIntegrationinFinancialServices");
  // highlight(body, "Last");
  // highlight(body, "Learned");
  // highlight(body, "Learning");
  // highlight(body, "Lehman’s");
  // highlight(body, "Lessons");
  // highlight(body, "LinkedInSearchSearchingtheSocialGraphinRealTime");
  // highlight(body, "Links");
  // highlight(body, "Location");
  // highlight(body, "Lock-free");
  // highlight(body, "Login");
  // highlight(body, "MORE");
  // highlight(body, "Machine");
  // highlight(body, "Major");
  // highlight(body, "Management");
  // highlight(body, "Manifesto");
  // highlight(body, "Many");
  // highlight(body, "Messaging");
  // highlight(body, "Michael");
  // highlight(body, "Microsoft");
  // highlight(body, "Minibooks");
  // highlight(body, "Mobile");
  // highlight(body, "Most");
  // highlight(body, "NEWS");
  // highlight(body, "NO");
  // highlight(body, "Nanjangud");
  // highlight(body, "Narendra");
  // highlight(body, "New");
  // highlight(body, "NewSQL");
  // highlight(body, "News");
  // highlight(body, "News");
  // highlight(body, "NoSQL");
  // highlight(body, "Non-Feedback");
  // highlight(body, "Notable");
  // highlight(body, "O'Reilly.");
  // highlight(body, "Offers");
  // highlight(body, "Older");
  // highlight(body, "Older>");
  // highlight(body, "OpenStack");
  // highlight(body, "Operations");
  // highlight(body, "Operations");
  // highlight(body, "Organization(PMO)");
  // highlight(body, "Outage");
  // highlight(body, "PHP");
  // highlight(body, "PaaS");
  // highlight(body, "Partner");
  // highlight(body, "Passes");
  // highlight(body, "Performance");
  // highlight(body, "Personal");
  // highlight(body, "Personality");
  // highlight(body, "Peterson's");
  // highlight(body, "Phoenix");
  // highlight(body, "Phone");
  // highlight(body, "Porting");
  // highlight(body, "Porting");
  // highlight(body, "Presentations");
  // highlight(body, "Providers");
  // highlight(body, "Region.");
  // highlight(body, "Requirements");
  // highlight(body, "Scalability");
  // highlight(body, "Security");
  // highlight(body, "Server");
  // highlight(body, "Service");
  // highlight(body, "Service");
  // highlight(body, "Service.");
  // highlight(body, "Shared");
  // highlight(body, "Showdown-");
  // highlight(body, "Sign");
  // highlight(body, "Software");
  // highlight(body, "Specific");
  // highlight(body, "Studies");
  // highlight(body, "Study");
  // highlight(body, "Supports");
  // highlight(body, "TITLES");
  // highlight(body, "TPL");
  // highlight(body, "Team");
  // highlight(body, "Techniques");
  // highlight(body, "Tester");
  // highlight(body, "Testing");
  // highlight(body, "Testing");
  // highlight(body, "The");
  // highlight(body, "Theory");
  // highlight(body, "To");
  // highlight(body, "Today");
  // highlight(body, "Today");
  // highlight(body, "Tomorrow");
  // highlight(body, "Tool");
  // highlight(body, "Tools");
  // highlight(body, "Top");
  // highlight(body, "Topics");
  // highlight(body, "Topics");
  // highlight(body, "Tracking");
  // highlight(body, "Traps");
  // highlight(body, "Twilio's");
  // highlight(body, "Type");
  // highlight(body, "UK");
  // highlight(body, "US");
  // highlight(body, "US-East");
  // highlight(body, "XText");
  // highlight(body, "Your");
  // highlight(body, "Zend");
  // highlight(body, "Zones");
  // highlight(body, "a");
  // highlight(body, "about");
  // highlight(body, "actor-based");
  // highlight(body, "affected");
  // highlight(body, "aimed");
  // highlight(body, "algorithic");
  // highlight(body, "all");
  // highlight(body, "allow");
  // highlight(body, "along");
  // highlight(body, "amongst");
  // highlight(body, "an");
  // highlight(body, "analysis");
  // highlight(body, "and");
  // highlight(body, "announcement");
  // highlight(body, "any");
  // highlight(body, "applications");
  // highlight(body, "appointed");
  // highlight(body, "apps");
  // highlight(body, "are");
  // highlight(body, "as");
  // highlight(body, "aspect");
  // highlight(body, "at");
  // highlight(body, "availability");
  // highlight(body, "avoid");
  // highlight(body, "be");
  // highlight(body, "been");
  // highlight(body, "being");
  // highlight(body, "best");
  // highlight(body, "block");
  // highlight(body, "block");
  // highlight(body, "brings");
  // highlight(body, "build");
  // highlight(body, "built");
  // highlight(body, "but");
  // highlight(body, "by");
  // highlight(body, "cache");
  // highlight(body, "cached");
  // highlight(body, "case");
  // highlight(body, "change");
  // highlight(body, "cloud.");
  // highlight(body, "collecting");
  // highlight(body, "combinators");
  // highlight(body, "commands.");
  // highlight(body, "comment");
  // highlight(body, "commentaries");
  // highlight(body, "comments");
  // highlight(body, "community");
  // highlight(body, "community");
  // highlight(body, "computational");
  // highlight(body, "concerns");
  // highlight(body, "continuous");
  // highlight(body, "control");
  // highlight(body, "couldn’t");
  // highlight(body, "daily");
  // highlight(body, "data");
  // highlight(body, "data.");
  // highlight(body, "demos.");
  // highlight(body, "deny");
  // highlight(body, "describe");
  // highlight(body, "detailed");
  // highlight(body, "development");
  // highlight(body, "devices.");
  // highlight(body, "different");
  // highlight(body, "discovered");
  // highlight(body, "distributed");
  // highlight(body, "eases");
  // highlight(body, "end");
  // highlight(body, "enterprise");
  // highlight(body, "entire");
  // highlight(body, "event.");
  // highlight(body, "ever");
  // highlight(body, "every");
  // highlight(body, "evolution");
  // highlight(body, "experienced");
  // highlight(body, "expressing");
  // highlight(body, "failure");
  // highlight(body, "feed");
  // highlight(body, "feedback");
  // highlight(body, "feedback@infoq.com Bugs");
  // highlight(body, "for");
  // highlight(body, "found");
  // highlight(body, "frameworks");
  // highlight(body, "from");
  // highlight(body, "full");
  // highlight(body, "guidance");
  // highlight(body, "had");
  // highlight(body, "handled");
  // highlight(body, "has");
  // highlight(body, "have");
  // highlight(body, "he");
  // highlight(body, "highly");
  // highlight(body, "his");
  // highlight(body, "how");
  // highlight(body, "iOS");
  // highlight(body, "iOS");
  // highlight(body, "iPhone");
  // highlight(body, "iPhone/iOS");
  // highlight(body, "importance");
  // highlight(body, "improve");
  // highlight(body, "in");
  // highlight(body, "in-memory");
  // highlight(body, "incomplete?");
  // highlight(body, "individual");
  // highlight(body, "influential");
  // highlight(body, "infrastructure");
  // highlight(body, "innovation");
  // highlight(body, "integration");
  // highlight(body, "into");
  // highlight(body, "is");
  // highlight(body, "issue");
  // highlight(body, "issues");
  // highlight(body, "it");
  // highlight(body, "its");
  // highlight(body, "laws");
  // highlight(body, "learned");
  // highlight(body, "learning");
  // highlight(body, "left");
  // highlight(body, "lessons");
  // highlight(body, "light");
  // highlight(body, "locally");
  // highlight(body, "location");
  // highlight(body, "cations");
  // highlight(body, "log");
  // highlight(body, "long-standict");
  // highlight(body, "promise");
  // highlight(body, "published");
  // highlight(body, "ranging");
  // highlight(body, "rated");
  // highlight(body, "read-writer");
  // highlight(body, "real");
  // highlight(body, "receives");
  // highlight(body, "regardless");
  // highlight(body, "released");
  // highlight(body, "remain");
  // highlight(body, "removal.");
  // highlight(body, "report");
  // highlight(body, "reported");
  // highlight(body, "scalable");
  // highlight(body, "stores");
  // highlight(body, "story");
  // highlight(body, "study");
  // highlight(body, "styles");
  // highlight(body, "such");
  // highlight(body, "system");
  // highlight(body, "talked");
  // highlight(body, "talks");
  // highlight(body, "tasks.");
  // highlight(body, "technique");
  // highlight(body, "techniques");
  // highlight(body, "testimonial");
  // highlight(body, "testing");
  // highlight(body, "tests");
  // highlight(body, "tests");
  // highlight(body, "that");
  // highlight(body, "the");
  // highlight(body, "the");
  // highlight(body, "their");
  // highlight(body, "theme.");
  // highlight(body, "there");
  // highlight(body, "they");
  // highlight(body, "this");
  // highlight(body, "this");
  // highlight(body, "this.");
  // highlight(body, "thread");
  // highlight(body, "threads");
  // highlight(body, "times");
  // highlight(body, "to");
  // highlight(body, "to");
  // highlight(body, "tool");
  // highlight(body, "tools");
  // highlight(body, "traditional");
  // highlight(body, "type");
  // highlight(body, "unique");
  // highlight(body, "unit");
  // highlight(body, "updates");
  // highlight(body, "us");
  // highlight(body, "used");
  // highlight(body, "user");
  // highlight(body, "users");
  // highlight(body, "using");
  // highlight(body, "via");
  // highlight(body, "videos");
  // highlight(body, "visitors");
  // highlight(body, "vmc");
  // highlight(body, "vs");
  // highlight(body, "week");
  // highlight(body, "were");
  // highlight(body, "when");
  // highlight(body, "which");
  // highlight(body, "while");
  // highlight(body, "why");
  // highlight(body, "widespread");
  // highlight(body, "will");
  // highlight(body, "winner");
  // highlight(body, "with");
  // highlight(body, "wondering");
  // highlight(body, "work");
  // highlight(body, "world");
  // highlight(body, "would");
  // highlight(body, "writer");
  // highlight(body, "yesterday");
  // highlight(body, "zone");
}

main();
