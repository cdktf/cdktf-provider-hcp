# `awsTransitGatewayAttachment` Submodule <a name="`awsTransitGatewayAttachment` Submodule" id="@cdktf/provider-hcp.awsTransitGatewayAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsTransitGatewayAttachment <a name="AwsTransitGatewayAttachment" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment hcp_aws_transit_gateway_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer"></a>

```typescript
import { awsTransitGatewayAttachment } from '@cdktf/provider-hcp'

new awsTransitGatewayAttachment.AwsTransitGatewayAttachment(scope: Construct, id: string, config: AwsTransitGatewayAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig">AwsTransitGatewayAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig">AwsTransitGatewayAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: AwsTransitGatewayAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AwsTransitGatewayAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isConstruct"></a>

```typescript
import { awsTransitGatewayAttachment } from '@cdktf/provider-hcp'

awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformElement"></a>

```typescript
import { awsTransitGatewayAttachment } from '@cdktf/provider-hcp'

awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformResource"></a>

```typescript
import { awsTransitGatewayAttachment } from '@cdktf/provider-hcp'

awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.generateConfigForImport"></a>

```typescript
import { awsTransitGatewayAttachment } from '@cdktf/provider-hcp'

awsTransitGatewayAttachment.AwsTransitGatewayAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AwsTransitGatewayAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsTransitGatewayAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsTransitGatewayAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsTransitGatewayAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.providerTransitGatewayAttachmentId">providerTransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference">AwsTransitGatewayAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnIdInput">hvnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArnInput">resourceShareArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentIdInput">transitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnId">hvnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArn">resourceShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `providerTransitGatewayAttachmentId`<sup>Required</sup> <a name="providerTransitGatewayAttachmentId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.providerTransitGatewayAttachmentId"></a>

```typescript
public readonly providerTransitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: AwsTransitGatewayAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference">AwsTransitGatewayAttachmentTimeoutsOutputReference</a>

---

##### `hvnIdInput`<sup>Optional</sup> <a name="hvnIdInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnIdInput"></a>

```typescript
public readonly hvnIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `resourceShareArnInput`<sup>Optional</sup> <a name="resourceShareArnInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArnInput"></a>

```typescript
public readonly resourceShareArnInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AwsTransitGatewayAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a>

---

##### `transitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transitGatewayAttachmentIdInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentIdInput"></a>

```typescript
public readonly transitGatewayAttachmentIdInput: string;
```

- *Type:* string

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnId"></a>

```typescript
public readonly hvnId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `resourceShareArn`<sup>Required</sup> <a name="resourceShareArn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArn"></a>

```typescript
public readonly resourceShareArn: string;
```

- *Type:* string

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsTransitGatewayAttachmentConfig <a name="AwsTransitGatewayAttachmentConfig" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.Initializer"></a>

```typescript
import { awsTransitGatewayAttachment } from '@cdktf/provider-hcp'

const awsTransitGatewayAttachmentConfig: awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.hvnId">hvnId</a></code> | <code>string</code> | The ID of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.resourceShareArn">resourceShareArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Resource Share that is needed to grant HCP access to the transit gateway in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | The user-settable name of the transit gateway attachment in HCP. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | The ID of the user-owned transit gateway in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment#id AwsTransitGatewayAttachment#id}. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where the transit gateway attachment is located."  If not specified, the project specified in the HCP Provider config block will be used, if configured. If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.hvnId"></a>

```typescript
public readonly hvnId: string;
```

- *Type:* string

The ID of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment#hvn_id AwsTransitGatewayAttachment#hvn_id}

---

##### `resourceShareArn`<sup>Required</sup> <a name="resourceShareArn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.resourceShareArn"></a>

```typescript
public readonly resourceShareArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Resource Share that is needed to grant HCP access to the transit gateway in AWS.

The Resource Share should be associated with the HCP AWS account principal (see [aws_ram_principal_association](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ram_principal_association)) and the transit gateway resource (see [aws_ram_resource_association](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ram_resource_association))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment#resource_share_arn AwsTransitGatewayAttachment#resource_share_arn}

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

The user-settable name of the transit gateway attachment in HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment#transit_gateway_attachment_id AwsTransitGatewayAttachment#transit_gateway_attachment_id}

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

The ID of the user-owned transit gateway in AWS.

The AWS region of the transit gateway must match the HVN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment#transit_gateway_id AwsTransitGatewayAttachment#transit_gateway_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment#id AwsTransitGatewayAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where the transit gateway attachment is located."  If not specified, the project specified in the HCP Provider config block will be used, if configured. If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment#project_id AwsTransitGatewayAttachment#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AwsTransitGatewayAttachmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment#timeouts AwsTransitGatewayAttachment#timeouts}

---

### AwsTransitGatewayAttachmentTimeouts <a name="AwsTransitGatewayAttachmentTimeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.Initializer"></a>

```typescript
import { awsTransitGatewayAttachment } from '@cdktf/provider-hcp'

const awsTransitGatewayAttachmentTimeouts: awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment#create AwsTransitGatewayAttachment#create}. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment#default AwsTransitGatewayAttachment#default}. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment#delete AwsTransitGatewayAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment#create AwsTransitGatewayAttachment#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment#default AwsTransitGatewayAttachment#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_transit_gateway_attachment#delete AwsTransitGatewayAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AwsTransitGatewayAttachmentTimeoutsOutputReference <a name="AwsTransitGatewayAttachmentTimeoutsOutputReference" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { awsTransitGatewayAttachment } from '@cdktf/provider-hcp'

new awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AwsTransitGatewayAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a>

---



