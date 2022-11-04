import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react"
import { NavContainer, NavItem, SubItem, SubNavContainer } from "./index.style";
import { menu } from "./menu.config";

const Navbar = () => {
  const router = useRouter()

  const [showSubMenu, setShowSubMenu] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState(-1)
  const navRef = useRef(null)

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      const target = e?.target as Node;
      if (!navRef.current?.contains(target)) {
        setShowSubMenu(false);
      }
    })
  }, [])

  const openSubMenu = (item, idx) => {
    if (!item.subMenu) {
      setSelectedIdx(-1);
      navigate(item)
      return;
    }

    setShowSubMenu(true);
    setSelectedIdx(idx);
  };

  const navigate = (item) => {
    if (!item.link) {
      return;
    }
    router.push(item.link, undefined, { shallow: true })
  }

  return (
    <NavContainer ref={navRef}>
      {
        menu.map((item, idx) => (
          <NavItem key={`item-${idx}`} onClick={() => openSubMenu(item, idx)}>
            {item.name}
            {
              showSubMenu && item.subMenu && (selectedIdx === idx) && (
                <SubNavContainer>
                  {
                    item.subMenu.map((subItem, subIdx) => (
                      <ul key={subIdx}>
                        <SubItem onClick={() => navigate(subItem)}>
                          {subItem.name}
                        </SubItem>
                      </ul>
                    ))
                  }
                </SubNavContainer>
              )
            }
          </NavItem>
        ))
      }
    </NavContainer>
  );
}

export default Navbar