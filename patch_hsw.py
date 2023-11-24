import requests

URL = 'https://newassets.hcaptcha.com/c/44fa09c/hsw.js'
# URL = 'https://newassets.hcaptcha.com/c/2027f8c/hsw.js'
# There's a lot more that we could patch
# but this seems to be enough for now
# it "works on my machine"
PATCHSET = {
    'J(I).language' : '"en-US"', # prob need a better way to do this (regex?)
    'instanceof Window' : 'instanceof Object',
    'instanceof PerformanceResourceTiming' : 'instanceof Object' 
}

hsw = requests.get(URL).text
with open('./src/assets/hsw.js', 'w+') as f: 
    f.write(hsw)
for op in PATCHSET:
    hsw = hsw.replace(op, PATCHSET[op])
    
hsw = '''let window = {};
try {
%s
} catch(e) {
    console.log("hsw.js failed: ", e);
    throw e;
} 
module.exports = hsw; ''' % hsw
# hsw = '''\
# let window = {};
# %s
# module.exports = hsw;
# ''' % hsw
with open('./src/assets/hsw.patched.js','w+') as f:
    f.write(hsw)