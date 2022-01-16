PAGES=(registration volunteers parents coaching programs/recreational programs/girls/u9 programs/girls/u11 programs/girls/u13 programs/girls/u15 programs/boys/u9 programs/boys/u11 programs/boys/u13 programs/boys/u15 about news)
dropDown=''  
  for page in ${PAGES[*]}
  do
    echo "Page item: $page"
    
    splitArr=(`echo $page | sed 's/\//\n/g'`)
    
    if [ "${splitArr[1]}" == "" ]; then     
      sed -e "/a.nav-link(href='\/contact') Contact/r"<(
        echo "    li.nav-item
      a.nav-link(href='/$page') ${splitArr[0]^}"
      ) -i -- views/layouts/navigation/collapsable-elements-partial.pug
    else      
      if [ "${splitArr[1]}" != "" ] && [ "$dropDown" == "${splitArr[0]}" ]; then 
        linkTitle=$([ ${#splitArr[@]} gt 2 ] && echo ${splitArr[2]} || echo ${splitArr[1]})
        sed -e "/.dropdown-menu.${splitArr[0]}-menu/r"<(
          echo "        a.dropdown-item(href='/$page') ${linkTitle^}"
        ) -i -- views/layouts/navigation/collapsable-elements-partial.pug
      fi
      
      if [ "${splitArr[1]}" != "" ] && [ "$dropDown" != "${splitArr[0]}" ]; then 
        dropDown="${splitArr[0]}"  
        linkTitle=$([ ${#splitArr[@]} gt 2 ] && echo ${splitArr[2]} || echo ${splitArr[1]})
        sed -e "/a.nav-link(href='\/contact') Contact/r"<(
          echo "    li.nav-item.dropdown
      a.nav-item.nav-link.dropdown-toggle.mr-md-2(href='#', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false')
        | ${splitArr[0]^}
      .dropdown-menu.${splitArr[0]}-menu
        a.dropdown-item(href='/$page') ${linkTitle^}"
          ) -i -- views/layouts/navigation/collapsable-elements-partial.pug
      fi
    fi  
  done
