import{d as t,S as e,o as a,h as o,w as d,aa as s,ai as l,cR as n,a as i,i as p,ac as g}from"./index-ec301f65.js";const r=t({name:"ElCollapseTransition"});var m=g(t({...r,setup(t){const g=e("collapse-transition"),r={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.maxHeight=`${t.scrollHeight}px`,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){0!==t.scrollHeight&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};return(t,e)=>(a(),o(p,l({name:i(g).b()},n(r)),{default:d((()=>[s(t.$slots,"default")])),_:3},16,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);m.install=t=>{t.component(m.name,m)};const y=m,f=y;export{f as E,y as _};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtODQ3N2FjMjcuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1taXJyb3IuY29tK2VsZW1lbnQtcGx1c0AyLjMuM192dWVAMy4yLjQ3L25vZGVfbW9kdWxlcy9lbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9jb2xsYXBzZS10cmFuc2l0aW9uL3NyYy9jb2xsYXBzZS10cmFuc2l0aW9uLm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1taXJyb3IuY29tK2VsZW1lbnQtcGx1c0AyLjMuM192dWVAMy4yLjQ3L25vZGVfbW9kdWxlcy9lbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9jb2xsYXBzZS10cmFuc2l0aW9uL2luZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIG9wZW5CbG9jaywgY3JlYXRlQmxvY2ssIFRyYW5zaXRpb24sIG1lcmdlUHJvcHMsIHVucmVmLCB0b0hhbmRsZXJzLCB3aXRoQ3R4LCByZW5kZXJTbG90IH0gZnJvbSAndnVlJztcbmltcG9ydCAnLi4vLi4vLi4vaG9va3MvaW5kZXgubWpzJztcbmltcG9ydCBfZXhwb3J0X3NmYyBmcm9tICcuLi8uLi8uLi9fdmlydHVhbC9wbHVnaW4tdnVlX2V4cG9ydC1oZWxwZXIubWpzJztcbmltcG9ydCB7IHVzZU5hbWVzcGFjZSB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS1uYW1lc3BhY2UvaW5kZXgubWpzJztcblxuY29uc3QgX19kZWZhdWx0X18gPSBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiBcIkVsQ29sbGFwc2VUcmFuc2l0aW9uXCJcbn0pO1xuY29uc3QgX3NmY19tYWluID0gLyogQF9fUFVSRV9fICovIGRlZmluZUNvbXBvbmVudCh7XG4gIC4uLl9fZGVmYXVsdF9fLFxuICBzZXR1cChfX3Byb3BzKSB7XG4gICAgY29uc3QgbnMgPSB1c2VOYW1lc3BhY2UoXCJjb2xsYXBzZS10cmFuc2l0aW9uXCIpO1xuICAgIGNvbnN0IG9uID0ge1xuICAgICAgYmVmb3JlRW50ZXIoZWwpIHtcbiAgICAgICAgaWYgKCFlbC5kYXRhc2V0KVxuICAgICAgICAgIGVsLmRhdGFzZXQgPSB7fTtcbiAgICAgICAgZWwuZGF0YXNldC5vbGRQYWRkaW5nVG9wID0gZWwuc3R5bGUucGFkZGluZ1RvcDtcbiAgICAgICAgZWwuZGF0YXNldC5vbGRQYWRkaW5nQm90dG9tID0gZWwuc3R5bGUucGFkZGluZ0JvdHRvbTtcbiAgICAgICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gMDtcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZ1RvcCA9IDA7XG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xuICAgICAgfSxcbiAgICAgIGVudGVyKGVsKSB7XG4gICAgICAgIGVsLmRhdGFzZXQub2xkT3ZlcmZsb3cgPSBlbC5zdHlsZS5vdmVyZmxvdztcbiAgICAgICAgaWYgKGVsLnNjcm9sbEhlaWdodCAhPT0gMCkge1xuICAgICAgICAgIGVsLnN0eWxlLm1heEhlaWdodCA9IGAke2VsLnNjcm9sbEhlaWdodH1weGA7XG4gICAgICAgICAgZWwuc3R5bGUucGFkZGluZ1RvcCA9IGVsLmRhdGFzZXQub2xkUGFkZGluZ1RvcDtcbiAgICAgICAgICBlbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gZWwuZGF0YXNldC5vbGRQYWRkaW5nQm90dG9tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsLnN0eWxlLm1heEhlaWdodCA9IDA7XG4gICAgICAgICAgZWwuc3R5bGUucGFkZGluZ1RvcCA9IGVsLmRhdGFzZXQub2xkUGFkZGluZ1RvcDtcbiAgICAgICAgICBlbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gZWwuZGF0YXNldC5vbGRQYWRkaW5nQm90dG9tO1xuICAgICAgICB9XG4gICAgICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgIH0sXG4gICAgICBhZnRlckVudGVyKGVsKSB7XG4gICAgICAgIGVsLnN0eWxlLm1heEhlaWdodCA9IFwiXCI7XG4gICAgICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gZWwuZGF0YXNldC5vbGRPdmVyZmxvdztcbiAgICAgIH0sXG4gICAgICBiZWZvcmVMZWF2ZShlbCkge1xuICAgICAgICBpZiAoIWVsLmRhdGFzZXQpXG4gICAgICAgICAgZWwuZGF0YXNldCA9IHt9O1xuICAgICAgICBlbC5kYXRhc2V0Lm9sZFBhZGRpbmdUb3AgPSBlbC5zdHlsZS5wYWRkaW5nVG9wO1xuICAgICAgICBlbC5kYXRhc2V0Lm9sZFBhZGRpbmdCb3R0b20gPSBlbC5zdHlsZS5wYWRkaW5nQm90dG9tO1xuICAgICAgICBlbC5kYXRhc2V0Lm9sZE92ZXJmbG93ID0gZWwuc3R5bGUub3ZlcmZsb3c7XG4gICAgICAgIGVsLnN0eWxlLm1heEhlaWdodCA9IGAke2VsLnNjcm9sbEhlaWdodH1weGA7XG4gICAgICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgIH0sXG4gICAgICBsZWF2ZShlbCkge1xuICAgICAgICBpZiAoZWwuc2Nyb2xsSGVpZ2h0ICE9PSAwKSB7XG4gICAgICAgICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gMDtcbiAgICAgICAgICBlbC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcbiAgICAgICAgICBlbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFmdGVyTGVhdmUoZWwpIHtcbiAgICAgICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gXCJcIjtcbiAgICAgICAgZWwuc3R5bGUub3ZlcmZsb3cgPSBlbC5kYXRhc2V0Lm9sZE92ZXJmbG93O1xuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nVG9wID0gZWwuZGF0YXNldC5vbGRQYWRkaW5nVG9wO1xuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gZWwuZGF0YXNldC5vbGRQYWRkaW5nQm90dG9tO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChfY3R4LCBfY2FjaGUpID0+IHtcbiAgICAgIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2soVHJhbnNpdGlvbiwgbWVyZ2VQcm9wcyh7XG4gICAgICAgIG5hbWU6IHVucmVmKG5zKS5iKClcbiAgICAgIH0sIHRvSGFuZGxlcnMob24pKSwge1xuICAgICAgICBkZWZhdWx0OiB3aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICByZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRlZmF1bHRcIilcbiAgICAgICAgXSksXG4gICAgICAgIF86IDNcbiAgICAgIH0sIDE2LCBbXCJuYW1lXCJdKTtcbiAgICB9O1xuICB9XG59KTtcbnZhciBDb2xsYXBzZVRyYW5zaXRpb24gPSAvKiBAX19QVVJFX18gKi8gX2V4cG9ydF9zZmMoX3NmY19tYWluLCBbW1wiX19maWxlXCIsIFwiL2hvbWUvcnVubmVyL3dvcmsvZWxlbWVudC1wbHVzL2VsZW1lbnQtcGx1cy9wYWNrYWdlcy9jb21wb25lbnRzL2NvbGxhcHNlLXRyYW5zaXRpb24vc3JjL2NvbGxhcHNlLXRyYW5zaXRpb24udnVlXCJdXSk7XG5cbmV4cG9ydCB7IENvbGxhcHNlVHJhbnNpdGlvbiBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsYXBzZS10cmFuc2l0aW9uLm1qcy5tYXBcbiIsImltcG9ydCBDb2xsYXBzZVRyYW5zaXRpb24gZnJvbSAnLi9zcmMvY29sbGFwc2UtdHJhbnNpdGlvbi5tanMnO1xuXG5Db2xsYXBzZVRyYW5zaXRpb24uaW5zdGFsbCA9IChhcHApID0+IHtcbiAgYXBwLmNvbXBvbmVudChDb2xsYXBzZVRyYW5zaXRpb24ubmFtZSwgQ29sbGFwc2VUcmFuc2l0aW9uKTtcbn07XG5jb25zdCBfQ29sbGFwc2VUcmFuc2l0aW9uID0gQ29sbGFwc2VUcmFuc2l0aW9uO1xuY29uc3QgRWxDb2xsYXBzZVRyYW5zaXRpb24gPSBfQ29sbGFwc2VUcmFuc2l0aW9uO1xuXG5leHBvcnQgeyBFbENvbGxhcHNlVHJhbnNpdGlvbiwgX0NvbGxhcHNlVHJhbnNpdGlvbiBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iXSwibmFtZXMiOlsiX19kZWZhdWx0X18iLCJkZWZpbmVDb21wb25lbnQiLCJuYW1lIiwiQ29sbGFwc2VUcmFuc2l0aW9uIiwic2V0dXAiLCJfX3Byb3BzIiwibnMiLCJ1c2VOYW1lc3BhY2UiLCJvbiIsImJlZm9yZUVudGVyIiwiZWwiLCJkYXRhc2V0Iiwib2xkUGFkZGluZ1RvcCIsInN0eWxlIiwicGFkZGluZ1RvcCIsIm9sZFBhZGRpbmdCb3R0b20iLCJwYWRkaW5nQm90dG9tIiwibWF4SGVpZ2h0IiwiZW50ZXIiLCJvbGRPdmVyZmxvdyIsIm92ZXJmbG93Iiwic2Nyb2xsSGVpZ2h0IiwiYWZ0ZXJFbnRlciIsImJlZm9yZUxlYXZlIiwibGVhdmUiLCJhZnRlckxlYXZlIiwiX2N0eCIsIl9jYWNoZSIsIm9wZW5CbG9jayIsImNyZWF0ZUJsb2NrIiwiVHJhbnNpdGlvbiIsIm1lcmdlUHJvcHMiLCJ1bnJlZiIsImIiLCJ0b0hhbmRsZXJzIiwiZGVmYXVsdCIsIndpdGhDdHgiLCJyZW5kZXJTbG90IiwiJHNsb3RzIiwiXyIsImluc3RhbGwiLCJhcHAiLCJjb21wb25lbnQiLCJfQ29sbGFwc2VUcmFuc2l0aW9uIiwiRWxDb2xsYXBzZVRyYW5zaXRpb24iXSwibWFwcGluZ3MiOiJrSEFLQSxNQUFNQSxFQUFjQyxFQUFnQixDQUNsQ0MsS0FBTSx5QkFvRVIsSUFBSUMsSUFsRThDRixFQUFBLElBQzdDRCxFQUNISSxNQUFNQyxHQUNFLE1BQUFDLEVBQUtDLEVBQWEsdUJBQ2xCQyxFQUFLLENBQ1RDLFlBQVlDLEdBQ0xBLEVBQUdDLFVBQ05ELEVBQUdDLFFBQVUsSUFDWkQsRUFBQUMsUUFBUUMsY0FBZ0JGLEVBQUdHLE1BQU1DLFdBQ2pDSixFQUFBQyxRQUFRSSxpQkFBbUJMLEVBQUdHLE1BQU1HLGNBQ3ZDTixFQUFHRyxNQUFNSSxVQUFZLEVBQ3JCUCxFQUFHRyxNQUFNQyxXQUFhLEVBQ3RCSixFQUFHRyxNQUFNRyxjQUFnQixDQUMxQixFQUNERSxNQUFNUixHQUNEQSxFQUFBQyxRQUFRUSxZQUFjVCxFQUFHRyxNQUFNTyxTQUNWLElBQXBCVixFQUFHVyxjQUNGWCxFQUFBRyxNQUFNSSxVQUFZLEdBQUdQLEVBQUdXLGlCQUN4QlgsRUFBQUcsTUFBTUMsV0FBYUosRUFBR0MsUUFBUUMsY0FDOUJGLEVBQUFHLE1BQU1HLGNBQWdCTixFQUFHQyxRQUFRSSxtQkFFcENMLEVBQUdHLE1BQU1JLFVBQVksRUFDbEJQLEVBQUFHLE1BQU1DLFdBQWFKLEVBQUdDLFFBQVFDLGNBQzlCRixFQUFBRyxNQUFNRyxjQUFnQk4sRUFBR0MsUUFBUUksa0JBRXRDTCxFQUFHRyxNQUFNTyxTQUFXLFFBQ3JCLEVBQ0RFLFdBQVdaLEdBQ1RBLEVBQUdHLE1BQU1JLFVBQVksR0FDbEJQLEVBQUFHLE1BQU1PLFNBQVdWLEVBQUdDLFFBQVFRLFdBQ2hDLEVBQ0RJLFlBQVliLEdBQ0xBLEVBQUdDLFVBQ05ELEVBQUdDLFFBQVUsSUFDWkQsRUFBQUMsUUFBUUMsY0FBZ0JGLEVBQUdHLE1BQU1DLFdBQ2pDSixFQUFBQyxRQUFRSSxpQkFBbUJMLEVBQUdHLE1BQU1HLGNBQ3BDTixFQUFBQyxRQUFRUSxZQUFjVCxFQUFHRyxNQUFNTyxTQUMvQlYsRUFBQUcsTUFBTUksVUFBWSxHQUFHUCxFQUFHVyxpQkFDM0JYLEVBQUdHLE1BQU1PLFNBQVcsUUFDckIsRUFDREksTUFBTWQsR0FDb0IsSUFBcEJBLEVBQUdXLGVBQ0xYLEVBQUdHLE1BQU1JLFVBQVksRUFDckJQLEVBQUdHLE1BQU1DLFdBQWEsRUFDdEJKLEVBQUdHLE1BQU1HLGNBQWdCLEVBRTVCLEVBQ0RTLFdBQVdmLEdBQ1RBLEVBQUdHLE1BQU1JLFVBQVksR0FDbEJQLEVBQUFHLE1BQU1PLFNBQVdWLEVBQUdDLFFBQVFRLFlBQzVCVCxFQUFBRyxNQUFNQyxXQUFhSixFQUFHQyxRQUFRQyxjQUM5QkYsRUFBQUcsTUFBTUcsY0FBZ0JOLEVBQUdDLFFBQVFJLGdCQUNyQyxHQUVJLE1BQUEsQ0FBQ1csRUFBTUMsS0FDTEMsSUFBYUMsRUFBWUMsRUFBWUMsRUFBVyxDQUNyRDdCLEtBQU04QixFQUFNMUIsR0FBSTJCLEtBQ2ZDLEVBQVcxQixJQUFNLENBQ2xCMkIsUUFBU0MsR0FBUSxJQUFNLENBQ3JCQyxFQUFXWCxFQUFLWSxPQUFRLGNBRTFCQyxFQUFHLEdBQ0YsR0FBSSxDQUFDLFNBRVgsSUFFNkQsQ0FBQyxDQUFDLFNBQVUscUhDeEU1RXBDLEVBQW1CcUMsUUFBV0MsSUFDeEJBLEVBQUFDLFVBQVV2QyxFQUFtQkQsS0FBTUMsRUFBa0IsRUFFdEQsTUFBQ3dDLEVBQXNCeEMsRUFDdEJ5QyxFQUF1QkQiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxXX0=
