$tag = $TAG
echo "$tag"
$version = $tag.trimStart("v")
echo "$version"
Invoke-Webrequest -URI "https://github.com/kubeshop/tracetest/releases/download/v${version}/tracetest_${version}_windows_amd64.tar.gz" -OutFile tracetest.tar.gz
$hash = Get-FileHash tracetest.tar.gz | Select -ExpandProperty Hash

echo '::echo::on'
echo "::set-output name=hash::$hash"
echo "::set-output name=version::$version"
