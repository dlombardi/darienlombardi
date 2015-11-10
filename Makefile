S3_Bucket=s3://www.darienlombardi.com/
	all:
	  aws s3 sync . $(S3_BUCKET) --exclude '.git/*' --exclude 'Makefile' --acl public-read --delete
