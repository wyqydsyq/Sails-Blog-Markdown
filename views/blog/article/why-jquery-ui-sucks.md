Why jQuery UI Sucks
=====
Wednesday, January 29, 2014

Having used jQuery UI for a few years now I've come across a bunch of grievances which ultimately resulted in me no longer using it. Besides, these days there's better alternatives like [Twitter Bootstrap](http://getbootstrap.com).

It messes with the DOM
-----

jQuery UI's methods of theming inject HTML attributes and elements to apply styles.

 * Injects confusing nested elements - try having a jQuery UI button which has a click binding that runs `$(this).next().show();`, expecting it to show the element after the button.
 * Horrible state management - try having a button that toggles between two icons in different states, rather than just using `.toggle()` with your icon classes, you need to find the generated ui-button and change the icon there, or maybe change the classes on the source button and use `$(this).button('refresh');` which is an ugly work around.

Everything about it is wrong
-----

At it's very core what jQUI does is wrong.

 * It injects HTML markup for styling with no informational purposes (non-semantic), which also results in a considerably larger DOM (= more memory usage and slower running scripts) compared to pure CSS UIs 
 * It abuses data-X attributes when in most if not all cases a class could be used instead
 * To have the generated elements reflect changes to the original source element, you need to manually refresh them
 * It requires you to edit/overwrite the messy ThemeRoller styles rather than using the ThemeRoller styles as a base and cloning defined classes/styles from the source button on top of them