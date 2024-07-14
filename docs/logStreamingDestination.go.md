# `logStreamingDestination` Submodule <a name="`logStreamingDestination` Submodule" id="@cdktf/provider-hcp.logStreamingDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogStreamingDestination <a name="LogStreamingDestination" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination hcp_log_streaming_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/logstreamingdestination"

logstreamingdestination.NewLogStreamingDestination(scope Construct, id *string, config LogStreamingDestinationConfig) LogStreamingDestination
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig">LogStreamingDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig">LogStreamingDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putCloudwatch">PutCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putDatadog">PutDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putSplunkCloud">PutSplunkCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetCloudwatch">ResetCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetDatadog">ResetDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetSplunkCloud">ResetSplunkCloud</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudwatch` <a name="PutCloudwatch" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putCloudwatch"></a>

```go
func PutCloudwatch(value LogStreamingDestinationCloudwatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putCloudwatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a>

---

##### `PutDatadog` <a name="PutDatadog" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putDatadog"></a>

```go
func PutDatadog(value LogStreamingDestinationDatadog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putDatadog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a>

---

##### `PutSplunkCloud` <a name="PutSplunkCloud" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putSplunkCloud"></a>

```go
func PutSplunkCloud(value LogStreamingDestinationSplunkCloud)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putSplunkCloud.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a>

---

##### `ResetCloudwatch` <a name="ResetCloudwatch" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetCloudwatch"></a>

```go
func ResetCloudwatch()
```

##### `ResetDatadog` <a name="ResetDatadog" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetDatadog"></a>

```go
func ResetDatadog()
```

##### `ResetSplunkCloud` <a name="ResetSplunkCloud" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetSplunkCloud"></a>

```go
func ResetSplunkCloud()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogStreamingDestination resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/logstreamingdestination"

logstreamingdestination.LogStreamingDestination_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/logstreamingdestination"

logstreamingdestination.LogStreamingDestination_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/logstreamingdestination"

logstreamingdestination.LogStreamingDestination_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/logstreamingdestination"

logstreamingdestination.LogStreamingDestination_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LogStreamingDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogStreamingDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogStreamingDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LogStreamingDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cloudwatch">Cloudwatch</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference">LogStreamingDestinationCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.datadog">Datadog</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference">LogStreamingDestinationDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.splunkCloud">SplunkCloud</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference">LogStreamingDestinationSplunkCloudOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.streamingDestinationId">StreamingDestinationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cloudwatchInput">CloudwatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.datadogInput">DatadogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.splunkCloudInput">SplunkCloudInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cloudwatch`<sup>Required</sup> <a name="Cloudwatch" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cloudwatch"></a>

```go
func Cloudwatch() LogStreamingDestinationCloudwatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference">LogStreamingDestinationCloudwatchOutputReference</a>

---

##### `Datadog`<sup>Required</sup> <a name="Datadog" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.datadog"></a>

```go
func Datadog() LogStreamingDestinationDatadogOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference">LogStreamingDestinationDatadogOutputReference</a>

---

##### `SplunkCloud`<sup>Required</sup> <a name="SplunkCloud" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.splunkCloud"></a>

```go
func SplunkCloud() LogStreamingDestinationSplunkCloudOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference">LogStreamingDestinationSplunkCloudOutputReference</a>

---

##### `StreamingDestinationId`<sup>Required</sup> <a name="StreamingDestinationId" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.streamingDestinationId"></a>

```go
func StreamingDestinationId() *string
```

- *Type:* *string

---

##### `CloudwatchInput`<sup>Optional</sup> <a name="CloudwatchInput" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cloudwatchInput"></a>

```go
func CloudwatchInput() interface{}
```

- *Type:* interface{}

---

##### `DatadogInput`<sup>Optional</sup> <a name="DatadogInput" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.datadogInput"></a>

```go
func DatadogInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SplunkCloudInput`<sup>Optional</sup> <a name="SplunkCloudInput" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.splunkCloudInput"></a>

```go
func SplunkCloudInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogStreamingDestinationCloudwatch <a name="LogStreamingDestinationCloudwatch" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/logstreamingdestination"

&logstreamingdestination.LogStreamingDestinationCloudwatch {
	ExternalId: *string,
	Region: *string,
	RoleArn: *string,
	LogGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.externalId">ExternalId</a></code> | <code>*string</code> | The external_id to provide when assuming the aws IAM role. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.region">Region</a></code> | <code>*string</code> | The region the CloudWatch destination is set up to stream to. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.roleArn">RoleArn</a></code> | <code>*string</code> | The role_arn that will be assumed to stream logs. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | The log_group_name of the CloudWatch destination. |

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

The external_id to provide when assuming the aws IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#external_id LogStreamingDestination#external_id}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region the CloudWatch destination is set up to stream to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#region LogStreamingDestination#region}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The role_arn that will be assumed to stream logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#role_arn LogStreamingDestination#role_arn}

---

##### `LogGroupName`<sup>Optional</sup> <a name="LogGroupName" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

The log_group_name of the CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#log_group_name LogStreamingDestination#log_group_name}

---

### LogStreamingDestinationConfig <a name="LogStreamingDestinationConfig" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/logstreamingdestination"

&logstreamingdestination.LogStreamingDestinationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Cloudwatch: github.com/cdktf/cdktf-provider-hcp-go/hcp.logStreamingDestination.LogStreamingDestinationCloudwatch,
	Datadog: github.com/cdktf/cdktf-provider-hcp-go/hcp.logStreamingDestination.LogStreamingDestinationDatadog,
	SplunkCloud: github.com/cdktf/cdktf-provider-hcp-go/hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.name">Name</a></code> | <code>*string</code> | The HCP Log Streaming Destination’s name. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.cloudwatch">Cloudwatch</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#cloudwatch LogStreamingDestination#cloudwatch}. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.datadog">Datadog</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#datadog LogStreamingDestination#datadog}. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.splunkCloud">SplunkCloud</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#splunk_cloud LogStreamingDestination#splunk_cloud}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The HCP Log Streaming Destination’s name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#name LogStreamingDestination#name}

---

##### `Cloudwatch`<sup>Optional</sup> <a name="Cloudwatch" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.cloudwatch"></a>

```go
Cloudwatch LogStreamingDestinationCloudwatch
```

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#cloudwatch LogStreamingDestination#cloudwatch}.

---

##### `Datadog`<sup>Optional</sup> <a name="Datadog" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.datadog"></a>

```go
Datadog LogStreamingDestinationDatadog
```

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#datadog LogStreamingDestination#datadog}.

---

##### `SplunkCloud`<sup>Optional</sup> <a name="SplunkCloud" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.splunkCloud"></a>

```go
SplunkCloud LogStreamingDestinationSplunkCloud
```

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#splunk_cloud LogStreamingDestination#splunk_cloud}.

---

### LogStreamingDestinationDatadog <a name="LogStreamingDestinationDatadog" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/logstreamingdestination"

&logstreamingdestination.LogStreamingDestinationDatadog {
	ApiKey: *string,
	Endpoint: *string,
	ApplicationKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.apiKey">ApiKey</a></code> | <code>*string</code> | The value for the DD-API-KEY to send when making requests to DataDog. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.endpoint">Endpoint</a></code> | <code>*string</code> | The Datadog endpoint to send logs to. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.applicationKey">ApplicationKey</a></code> | <code>*string</code> | The value for the DD-APPLICATION-KEY to send when making requests to DataDog. |

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

The value for the DD-API-KEY to send when making requests to DataDog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#api_key LogStreamingDestination#api_key}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

The Datadog endpoint to send logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#endpoint LogStreamingDestination#endpoint}

---

##### `ApplicationKey`<sup>Optional</sup> <a name="ApplicationKey" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.applicationKey"></a>

```go
ApplicationKey *string
```

- *Type:* *string

The value for the DD-APPLICATION-KEY to send when making requests to DataDog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#application_key LogStreamingDestination#application_key}

---

### LogStreamingDestinationSplunkCloud <a name="LogStreamingDestinationSplunkCloud" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/logstreamingdestination"

&logstreamingdestination.LogStreamingDestinationSplunkCloud {
	Endpoint: *string,
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud.property.endpoint">Endpoint</a></code> | <code>*string</code> | The Splunk Cloud endpoint to send logs to. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud.property.token">Token</a></code> | <code>*string</code> | The authentication token that will be used by the platform to access Splunk Cloud. |

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

The Splunk Cloud endpoint to send logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#endpoint LogStreamingDestination#endpoint}

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud.property.token"></a>

```go
Token *string
```

- *Type:* *string

The authentication token that will be used by the platform to access Splunk Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/log_streaming_destination#token LogStreamingDestination#token}

---

## Classes <a name="Classes" id="Classes"></a>

### LogStreamingDestinationCloudwatchOutputReference <a name="LogStreamingDestinationCloudwatchOutputReference" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/logstreamingdestination"

logstreamingdestination.NewLogStreamingDestinationCloudwatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogStreamingDestinationCloudwatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.resetLogGroupName">ResetLogGroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupName` <a name="ResetLogGroupName" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.resetLogGroupName"></a>

```go
func ResetLogGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogStreamingDestinationDatadogOutputReference <a name="LogStreamingDestinationDatadogOutputReference" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/logstreamingdestination"

logstreamingdestination.NewLogStreamingDestinationDatadogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogStreamingDestinationDatadogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.resetApplicationKey">ResetApplicationKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationKey` <a name="ResetApplicationKey" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.resetApplicationKey"></a>

```go
func ResetApplicationKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.applicationKeyInput">ApplicationKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.applicationKey">ApplicationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ApplicationKeyInput`<sup>Optional</sup> <a name="ApplicationKeyInput" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.applicationKeyInput"></a>

```go
func ApplicationKeyInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `ApplicationKey`<sup>Required</sup> <a name="ApplicationKey" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.applicationKey"></a>

```go
func ApplicationKey() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogStreamingDestinationSplunkCloudOutputReference <a name="LogStreamingDestinationSplunkCloudOutputReference" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/logstreamingdestination"

logstreamingdestination.NewLogStreamingDestinationSplunkCloudOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogStreamingDestinationSplunkCloudOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



