#Config .gitattributes
* text eol=lf
#Save first
git add .
git commit -m "msg"
git push

#renormalize
git add --renormalize .

#check
git status
git commit -m "msg"
git push
