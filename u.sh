info=$1
if ["$info" = ""];
then info="update:personal intro hub update"
fi
git add -A
git commit -m "$info"
git push origin main -f